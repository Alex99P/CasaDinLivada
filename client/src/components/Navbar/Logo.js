import { Link, Stack, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

const Logo = () => (
    <Stack
        direction="column"
        justifyContent="center"
        alignItems="flex-start"
    >
        <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={0.2}
        >
            <Link
                href="/"
                underline="none"
                color="black"
                variant="h5"
            >
                <Typography variant="h6" color="white" mr={2}>
                    Casa Din Livada
                </Typography>
            </Link>

            <StarIcon fontSize="small" />
            <StarIcon fontSize="small" />
            <StarIcon fontSize="small" />
        </Stack>
        <Typography fontSize={11} color="white" mr={2}>
            Sistemul oficial de rezervare
        </Typography>
    </Stack>
)

export default Logo