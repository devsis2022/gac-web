import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { AppRoutes } from './routes'
import { LoadingConsumer } from './context/loadingContext';
import { Backdrop, CircularProgress } from '@mui/material';
import './style.css'

const App = () => {
  const { isLoading } = LoadingConsumer();

  return (
    <>
      <Backdrop sx={{ zIndex: 10 }} open={isLoading}>
          <CircularProgress color="inherit" />
      </Backdrop>
      <ToastContainer />
      <AppRoutes />
    </>
  )
}

export default App