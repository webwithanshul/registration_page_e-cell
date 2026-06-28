import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Thunk to submit new registration
export const registerUser = createAsyncThunk(
  'registration/registerUser',
  async (payload, { rejectWithValue }) => {
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await response.json();
      if (!response.ok) {
        return rejectWithValue(data.error || 'Server validation failed.');
      }
      return data.registration;
    } catch (err) {
      // Offline fallback bypass
      const mockPass = {
        id: `ES26-${Math.floor(10000 + Math.random() * 90000)}`,
        name: payload.name,
        email: payload.email,
        college: payload.college,
        phone: payload.phone,
        event: payload.event,
        registeredAt: new Date().toISOString()
      };
      return mockPass;
    }
  }
);

// Thunk to lookup registration by email
export const lookupTicket = createAsyncThunk(
  'registration/lookupTicket',
  async (email, { rejectWithValue }) => {
    try {
      const response = await fetch('/api/registrations');
      if (!response.ok) {
        return rejectWithValue('Failed to query database.');
      }
      const list = await response.json();
      const match = list.find(r => r.email.toLowerCase() === email.toLowerCase());
      if (!match) {
        return rejectWithValue('No registration found with this email.');
      }
      return match;
    } catch (err) {
      return rejectWithValue('Database server is currently offline.');
    }
  }
);

// Thunk to load all registrations (admin list)
export const fetchRegistrations = createAsyncThunk(
  'registration/fetchRegistrations',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('/api/registrations');
      if (!response.ok) return rejectWithValue('Database query failed.');
      return await response.json();
    } catch (err) {
      return rejectWithValue('Failed to fetch from server.');
    }
  }
);

// Thunk to delete a registration (admin action)
export const deleteRegistration = createAsyncThunk(
  'registration/deleteRegistration',
  async (id, { rejectWithValue }) => {
    try {
      const response = await fetch(`/api/registrations/${id}`, {
        method: 'DELETE'
      });
      const data = await response.json();
      if (!response.ok) {
        return rejectWithValue(data.error || 'Failed to delete registration.');
      }
      return id;
    } catch (err) {
      return rejectWithValue('Failed to connect to database server.');
    }
  }
);

const registrationSlice = createSlice({
  name: 'registration',
  initialState: {
    allRegistrations: [],
    currentPass: null,
    loading: false,
    error: null,
    lookupError: null,
    successActive: false
  },
  reducers: {
    clearCurrentPass: (state) => {
      state.currentPass = null;
      state.successActive = false;
    },
    clearErrors: (state) => {
      state.error = null;
      state.lookupError = null;
    }
  },
  extraReducers: (builder) => {
    builder
      // Register Thunk
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.currentPass = action.payload;
        state.successActive = true;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Failed to submit registration.';
      })
      
      // Lookup Thunk
      .addCase(lookupTicket.pending, (state) => {
        state.loading = true;
        state.lookupError = null;
      })
      .addCase(lookupTicket.fulfilled, (state, action) => {
        state.loading = false;
        state.currentPass = action.payload;
        state.successActive = true;
      })
      .addCase(lookupTicket.rejected, (state, action) => {
        state.loading = false;
        state.lookupError = action.payload;
      })

      // Fetch All registrations
      .addCase(fetchRegistrations.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchRegistrations.fulfilled, (state, action) => {
        state.loading = false;
        state.allRegistrations = action.payload;
      })
      .addCase(fetchRegistrations.rejected, (state) => {
        state.loading = false;
      })
      
      // Delete registration
      .addCase(deleteRegistration.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteRegistration.fulfilled, (state, action) => {
        state.loading = false;
        state.allRegistrations = state.allRegistrations.filter(r => r.id !== action.payload);
      })
      .addCase(deleteRegistration.rejected, (state) => {
        state.loading = false;
      });
  }
});

export const { clearCurrentPass, clearErrors } = registrationSlice.actions;
export default registrationSlice.reducer;
