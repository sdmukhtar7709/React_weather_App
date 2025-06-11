import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './infoBox.css';

function formatPressure(pressure) {
    return pressure ? `${pressure} hPa` : "N/A";
}

export default function InfoBox({ info }) {
    const INIT_URL = "https://i.pinimg.com/736x/7c/da/ba/7cdaba8e7cfe00fdce925e4c7fd71d18.jpg";
    const cold = "https://i.pinimg.com/736x/58/90/1f/58901f780eb9afab3cc9b074fad8e037.jpg";
    const hot = "https://i.pinimg.com/736x/44/97/cb/4497cb366f355b97120765dfef2f46c2.jpg";
    const rainy = "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80";

    const imageUrl =
        info.weather && info.weather.toLowerCase().includes("rain")
            ? rainy
            : info.temp < 15
                ? cold
                : info.temp >= 30
                    ? hot
                    : INIT_URL;

    const iconUrl = info.icon
        ? `https://openweathermap.org/img/wn/${info.icon}@4x.png`
        : null;

    return (
        <div className="InfoBox">
            <h2 style={{ marginBottom: 16 }}>
                Weather in <span style={{ color: "#1976d2" }}>{info.city}, {info.country}</span>
            </h2>
            <div className="card-container">
                <Card sx={{ maxWidth: 400, margin: "0 auto", boxShadow: 3 }}>
                    <CardMedia
                        component="img"
                        alt="Weather visual"
                        height="180"
                        image={imageUrl}
                    />
                    <CardContent>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                            {iconUrl && (
                                <img src={iconUrl} alt={info.weather} style={{ width: 60, height: 60 }} />
                            )}
                            <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 600 }}>
                                {info.weather} <span style={{ fontSize: 16, color: "#888" }}>({info.description})</span>
                            </Typography>
                        </div>
                        <Typography variant="body1" color="text.primary" sx={{ marginBottom: 1 }}>
                            <strong>Temperature:</strong> {info.temp}°C &nbsp;|&nbsp;
                            <strong>Feels like:</strong> {info.feels_like}°C
                        </Typography>
                        <Typography variant="body2" color="text.secondary" component="div">
                            <strong>Humidity:</strong> {info.humidity}%<br />
                           
                            <strong>Visibility:</strong> {info.visibility ? `${info.visibility / 1000} km` : "N/A"}<br />
                            <strong>Min Temp:</strong> {info.temp_min}°C<br />
                            <strong>Max Temp:</strong> {info.temp_max}°C<br />
                            <strong>Wind Speed:</strong> {info.wind} m/s<br />
                          
                            <strong>Ground Level:</strong> {info.grnd_level ? `${info.grnd_level} hPa` : "N/A"}
                        </Typography>


                        


                    </CardContent>
                </Card>
            </div>
        </div>
    );
}