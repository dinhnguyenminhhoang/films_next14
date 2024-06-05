import {
    Box,
    Container,
    Grid,
    Typography,
    Link as MuiLink,
    IconButton,
} from '@mui/material'
import {
    Facebook,
    Twitter,
    GitHub,
    Instagram,
    LinkedIn,
} from '@mui/icons-material'

const Footer = () => {
    return (
        <Box
            component="footer"
            className="bg-primary py-6 text-primary-foreground"
        >
            <Container maxWidth="xl">
                <Grid container spacing={4}>
                    <Grid item xs={12} md={3}>
                        <Typography variant="h6" gutterBottom>
                            Company
                        </Typography>
                        <MuiLink
                            href="#"
                            color="inherit"
                            underline="hover"
                            display="block"
                        >
                            About
                        </MuiLink>
                        <MuiLink
                            href="#"
                            color="inherit"
                            underline="hover"
                            display="block"
                        >
                            Careers
                        </MuiLink>
                        <MuiLink
                            href="#"
                            color="inherit"
                            underline="hover"
                            display="block"
                        >
                            Brand Center
                        </MuiLink>
                        <MuiLink
                            href="#"
                            color="inherit"
                            underline="hover"
                            display="block"
                        >
                            Blog
                        </MuiLink>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Typography variant="h6" gutterBottom>
                            Help Center
                        </Typography>
                        <MuiLink
                            href="#"
                            color="inherit"
                            underline="hover"
                            display="block"
                        >
                            Discord Server
                        </MuiLink>
                        <MuiLink
                            href="#"
                            color="inherit"
                            underline="hover"
                            display="block"
                        >
                            Twitter
                        </MuiLink>
                        <MuiLink
                            href="#"
                            color="inherit"
                            underline="hover"
                            display="block"
                        >
                            Facebook
                        </MuiLink>
                        <MuiLink
                            href="#"
                            color="inherit"
                            underline="hover"
                            display="block"
                        >
                            Contact Us
                        </MuiLink>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Typography variant="h6" gutterBottom>
                            Legal
                        </Typography>
                        <MuiLink
                            href="#"
                            color="inherit"
                            underline="hover"
                            display="block"
                        >
                            Privacy Policy
                        </MuiLink>
                        <MuiLink
                            href="#"
                            color="inherit"
                            underline="hover"
                            display="block"
                        >
                            Licensing
                        </MuiLink>
                        <MuiLink
                            href="#"
                            color="inherit"
                            underline="hover"
                            display="block"
                        >
                            Terms & Conditions
                        </MuiLink>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Typography variant="h6" gutterBottom>
                            Download
                        </Typography>
                        <MuiLink
                            href="#"
                            color="inherit"
                            underline="hover"
                            display="block"
                        >
                            iOS
                        </MuiLink>
                        <MuiLink
                            href="#"
                            color="inherit"
                            underline="hover"
                            display="block"
                        >
                            Android
                        </MuiLink>
                        <MuiLink
                            href="#"
                            color="inherit"
                            underline="hover"
                            display="block"
                        >
                            Windows
                        </MuiLink>
                        <MuiLink
                            href="#"
                            color="inherit"
                            underline="hover"
                            display="block"
                        >
                            MacOS
                        </MuiLink>
                    </Grid>
                </Grid>
                <Box
                    mt={4}
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Typography variant="body2" color="white">
                        © 2023{' '}
                        <MuiLink href="https://flowbite.com/" color="inherit">
                            Flowbite™
                        </MuiLink>
                        . All Rights Reserved.
                    </Typography>
                    <Box>
                        <IconButton href="#" color="inherit">
                            <Facebook />
                            <span className="sr-only">Facebook page</span>
                        </IconButton>
                        <IconButton href="#" color="inherit">
                            <Twitter />
                            <span className="sr-only">Twitter page</span>
                        </IconButton>
                        <IconButton href="#" color="inherit">
                            <GitHub />
                            <span className="sr-only">GitHub account</span>
                        </IconButton>
                        <IconButton href="#" color="inherit">
                            <Instagram />
                            <span className="sr-only">Instagram page</span>
                        </IconButton>
                        <IconButton href="#" color="inherit">
                            <LinkedIn />
                            <span className="sr-only">LinkedIn page</span>
                        </IconButton>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Footer
