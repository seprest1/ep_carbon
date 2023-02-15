import { useDispatch, useSelector } from 'react-redux';
// mui
import { Card, Typography, Grid } from '@mui/material';

function Authors () {
  const books = useSelector (store => store.books);
  const authors = books.map(book => book.author).filter((author, index, array) => array.indexOf(author) === index);
  
    return (
        <Grid container id="authors"
            gap={2} 
            columns={{ xs: 4, sm: 8, md: 12, l: 12}}
            fullWidth
            sx={{mx: '10%'}}>
            {authors && authors.map((author, i) => 
            <Grid key={i} item xs={3}>
                <Card sx={{ padding: 2 }}>
                    <Typography variant="body2" sx={{ textAlign: 'center', fontWeight: '600' }}>
                    {author}
                    </Typography>
                </Card>
            </Grid>
            )}
        </Grid>
    )
};

export default Authors;