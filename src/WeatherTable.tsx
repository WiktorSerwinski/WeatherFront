import { useState, useEffect } from 'react';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import WeatherIcon from './WeatherIcon';
import { Box } from '@mui/material';

interface WeatherData {
  time: string;
  weatherCode: number;
  temperature2mMax: number;
  temperature2mMin: number;
  generatedEnergy: number;
}

interface GeolocProps {
  latitude: number;
  longitude: number;
}




export default function WeatherTable({latitude,longitude} : GeolocProps) {
  const [rows, setRows] = useState<WeatherData[]>([]);
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        
        // Ustawienie adresu URL dla Axios
        axios.defaults.baseURL = import.meta.env.VITE_API_URL;

        const response = await axios.get(`/weather?latitude=${latitude}&longitude=${longitude}`);
        setRows(response.data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchData();
  }, []);


  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pl-PL'); 
  };

  return (
  <Box component={Paper} display={"flex"} justifyContent={"center"}>
    <TableContainer component={Paper} sx={{width: '100%', maxWidth: '800px', margin: '0 auto'}}>
      <Table>
        <TableHead>
        {rows.map((row) => (
              <TableCell align="center">{formatDate(row.time)}</TableCell>            
          ))}                 
        </TableHead>
        <TableBody>
        <TableRow>
          {rows.map((row) => (
                <TableCell align="center">
                  <WeatherIcon x={row.weatherCode}></WeatherIcon>
                  {/* {row.weatherCode} */}
                </TableCell>
            ))}
        </TableRow>
        <TableRow>
          {rows.map((row) => (
                <TableCell align="center">{row.temperature2mMin} °C</TableCell>
            ))}
        </TableRow>
        <TableRow>
          {rows.map((row) => (
                <TableCell align="center">{row.temperature2mMax} °C</TableCell>
            ))}
        </TableRow>
        <TableRow>
          {rows.map((row) => (
                <TableCell align="center">{row.generatedEnergy} [kWh]</TableCell>
            ))}
        </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  </Box>
  );
}
