import Typography from '@mui/material/Typography';

interface Data {
    apellidos: string;
    nombres: string;
    paralelo: string;
}

export default function Student( data: Data ) {
    return (
        <>
            <Typography component="p" variant="h4">
                
                {data.apellidos}, {data.nombres}

            </Typography>
            <Typography component="h2" variant="h6"
                color="primary" gutterBottom>

                Paralelo #{data.paralelo}

            </Typography>
        </>
    )
}
