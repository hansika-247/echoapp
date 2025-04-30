import React, { useState, useEffect } from 'react';
import { FaStar, FaRegStar, FaStarHalfAlt, FaMusic, FaSearch, FaHistory, FaTimes } from 'react-icons/fa';
import { IoMdTrendingUp } from 'react-icons/io';

interface MusicItem {
  id: number;
  title: string;
  artist: string;
  image: string;
  userRating?: number;
  averageRating?: number;
  totalRatings?: number;
  genre?: string;
  duration?: string;
  releaseYear?: number;
  ratingDate?: string;
}

const RateUs: React.FC = () => {
  const [currentItem, setCurrentItem] = useState<MusicItem>({
    id: 1,
    title: 'As It Was',
    artist: 'Harry Styles',
    image: 'https://i.scdn.co/image/ab67616d0000b2732e8ed79e177ff6011076f5f0',
    userRating: 0,
    averageRating: 4.2,
    totalRatings: 1245,
    genre: 'Pop',
    duration: '3:20',
    releaseYear: 2019
  });

  const [recentlyRated, setRecentlyRated] = useState<MusicItem[]>([
    {
      id: 2,
      title: 'Bad Habits',
      artist: 'Ed Sheeran',
      image: 'https://i.scdn.co/image/ab67616d0000b273ef24c3fdbf856340d55cfeb2',
      userRating: 4,
      genre: 'Pop',
      duration: '3:35',
      releaseYear: 2019
    },
    {
      id: 3,
      title: 'Watermelon Sugar',
      artist: 'Harry Styles',
      image: 'https://i.scdn.co/image/ab67616d0000b273e6f407c7f3a0ec98845e4431',
      userRating: 5,
      genre: 'Pop',
      duration: '2:54',
      releaseYear: 2019
    },
    {
      id: 4,
      title: "As it was",
      artist: 'Dua Lipa',
      image: 'https://i.scdn.co/image/ab67616d0000b2732e8ed79e177ff6011076f5f0',
      userRating: 3,
      genre: 'Dance',
      duration: '3:03',
      releaseYear: 2019
    },
  ]);

  const [ratingHistory, setRatingHistory] = useState<MusicItem[]>([]);
  const [hoverRating, setHoverRating] = useState<number>(0);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showRatingHistory, setShowRatingHistory] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'recommended' | 'trending'>('recommended');

  useEffect(() => {
    // Simulate loading rating history
    const history = [
      {
        id: 11,
        title: 'Levitating',
        artist: 'Dua Lipa',
        image: 'https://i.scdn.co/image/ab67616d0000b273f7b7174b6a7bc1c7cdd6b98b',
        userRating: 5,
        genre: 'Pop',
        duration: '3:23',
        releaseYear: 2020,
        ratingDate: '2023-05-15'
      },
      {
        id: 12,
        title: 'Bad Habits',
        artist: 'Ed Sheren',
        image: '',
        userRating: 4,
        genre: 'Pop',
        duration: '2:47',
        releaseYear: 2022,
        ratingDate: '2023-05-10'
      },
    ];
    setRatingHistory(history);
  }, []);

  const recommendedItems: MusicItem[] = [
    {
      id: 5,
      title: 'Levitating',
      artist: 'Dua Lipa',
      image: 'data:image/jpeg;base64,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',
      averageRating: 4.5,
      genre: 'Pop',
      duration: '3:23',
      releaseYear: 2020
    },
    {
      id: 6,
      title: 'Bad habits',
      artist: 'Ed Sheeran',
      image: 'https://i.scdn.co/image/ab67616d0000b273ef24c3fdbf856340d55cfeb2',
      averageRating: 4.1,
      genre: 'Pop',
      duration: '2:47',
      releaseYear: 2022
    },
    {
      id: 7,
      title: 'Sunflower',
      artist: 'Post Malone, Swae Lee',
      image: 'https://i.scdn.co/image/ab67616d0000b2735d48e2f56d691f9a4e4b0bdf',
      averageRating: 4.3,
      genre: 'Pop',
      duration: '2:38',
      releaseYear: 2018
    },
    {
      id: 13,
      title: 'Save Your Tears',
      artist: 'The Weeknd',
      image: 'https://i.scdn.co/image/ab67616d0000b2738863bc11d2aa12b54f5aeb36',
      averageRating: 4.2,
      genre: 'Pop',
      duration: '3:35',
      releaseYear: 2020,
      totalRatings: 1872
    }
  ];

  const trendingItems: MusicItem[] = [
    {
      id: 8,
      title: 'Stay',
      artist: 'The Kid LAROI, Justin Bieber',
    image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUTExIVFRUVFhUVFRcVFRUVFRcVFRUWFxYVFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQFy0fHR0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAKgBLAMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAADAAECBAUGBwj/xABIEAACAQIDBAcEBwUFBwUBAAABAgMAEQQSIQUxQVEGEyJhcYGRBzKhsRQjQlJiwdFyc4KysySiwuHwMzRTdJKT8RaDo7TDFf/EABgBAAMBAQAAAAAAAAAAAAAAAAABAgME/8QAIREBAQEBAQEBAAEFAQAAAAAAAAERAjESIUEDMlFhcSL/2gAMAwEAAhEDEQA/AOE6eMPprAblCKPJaxtmD62P94nzFX+lsmbGSn8R+C2qlssfXRfvE+YrT+WHH9sepyC+nfUxh15UjvHj+Roq1RBYsBUNtBb8q8mBvI3nXq+1zaI+B+RryeH3j51Jx6N7HntjZBzwx+DR/rXrmMmZIiy7xb51417JJLbRtzw7j+mfyr2TGreMjwqmfTOXa0ncfKvOfaXiTJjcKTbROH7bV6EMPXnPtES2Nw37H+NqqyI5t/lxUq6v3Of5hXaezCft4lO9H+LA/lXHYgdqXuZj/eWt72cz2xjr95G+DKf1qWsavtLP18X7s/zmuPNdb7SD9fF+7P8AMa5K9bceJvqDChNRmoTVVBLuprVJd1MaRmpqlTGkDAUYppfhuv30K1GA0pFQCKgRRytRBINxYkdwI9DvpVUV7UxFEZagak0RSIpxT2oCFqa1ENNagI2pqlUaAVKlSpGenvUae9BJqakbUEmmzGnowTbT5sRIfxP+YoezjaaL94nzFQxLXdjzzH1NPhD9Yh/GvzFZ/wAqnj1g7x4n5UZTQL6jzorHSmlU6QNaFv2T8jXlkG8+Br07pMf7O3h+RrzGDefA0jjtPZdLbaUX4kdfWIn/AA17di1uhHhXz50OnkTHQGLLnzALnvl7SMDe3cTXsxn2jbtJhrdxk/SrjPtb6rxrzb2jaY3D/sD+dq7iWXHaWjgvxu7/AA0rzzp7LMcZD1yqrCNdEbMLZ21p2o5n65fGe9N4t/MKu9C5suPj/EWX1U/pVHaB7UvifmtQ2NNkxMLcpU+LAfnU31rPHZe0g/XRfuz/ADGuSzV1HtFb62L92f5q5K9a8eFZ+plqgTTE1Emq0YIp0piat7J2TPiTaGJn5ncg8XOgrrMP7MsQRd54lPIB3+OlTeoeOHvUOuW9r69+ldoPZ5KWKieNiN5VHIHcx4Hu1oGI9neLH/CkXjlext4OBU/UPHJtfhv+FHhckai1LF7AxMRs0MyHuRmX1Fx6GqplkTRlv4XVv+k05SsEaW7Fe69InS/OgRn646MDlNwQQQamH093hxqZfTs8WMQQcliB2BffoRe/mbE+dV9KF1x7h60xn/Eo9KWniwiX0AJJOlv0qFqLEjZQ+awa+U7r23kcwDYeJqjns7anf40aMWaRqAk/CflUS5+78v1plidMagWbkPWm7Xd/ryo006aqT4g8DxokUpP2v1FR9fp/NWqVqF/EfhT5e8/D9KokyKao5R3+p/KpWHf6n9aADLv/AIf0qcJ7Snky/lUZTqfD8xSvx5EVCnrRF7edTB0oCudLW1F9aIC/JfU00KHSd/7M/hXm0O/yr0bpVcYZ779N26vOYDr5UjaewcUYsTDIPsvGdfG3517UOkb2+yPEV4dsl7Twnk8J9JFr6G6VY2SHCSyQkB1ClSRmHvAajzqp4npnr0m55PWvOfaPjOtxsbaaRINN3vua1F6Y7SI1aH/tf51y3SjaE886vPlzhFAyrlGUMxGniTRiWVtEdqXz+a1nq9iG5EH01rS2mO1L4D4hKygRe3+t1K+r58dt09lBeBibZoiR6/51U6PdFZ8YvWIVSO9g8lwGI35QBc+O6sFsVLjJooi1/diXcAqcT6Ak87V7DgZ1XKi2WNBlUcAF7Iv6Mb99P6yHjnU9l8v2sXGBxIjY2Hmwp9j9G8HmORWxGUkdZKcsbMN+WNd6DjfNe4ApdKNvtM/0WF7rukcbrfdXmOZ41dw+LWFcqiyQpqfDU/H1JHKp+rTx1WFKxgILaDgAAOVgNAO4USfEHLZfebQdxPGuOba7xRiRtSzKnwGYjw3edW5NsFoXe1msQo5FhYH41Ib2zcSGBykLCl1XgZCDZnJ+7e/jvq0+OGbIguRv5L41h7EU9QlhoqqB4gD861sDgsq9q9zrvI9bUBZRSTq7X7tBVPGmB/q3RZe5lDjzo2JQW1cgcbak+dYz7fwsBsA1+PZa/wAaZMzans9w813hZoHIIGpePX8DG48iPCuF6XbBkw4AdbLYAOvumy668yeB1r0c9N8P9kOfKgbS6RxTRMhhDqw1V/dPjpp48KrRn7HiuIVmAkINm7OYne0YUHjoQCnqKg6ZeRF+I7tRXR4zZ8TXypJGgJ1F5UQkAWJO8dka3vpVDEbCmyF0XrUG5ohmAuftL7y+Yt31DZRwrE8zYW1JPG9h6/GiIe03jRdk4N5mCRAO5OUKPe5liNwHC/dVnbOxJcOWzMjG+oUk5fUa+VVuRObqsJbi4qKzb71WMltBuqOYk31p/RfK/wDRFKvmkAkU2CkGzDmHFxpy486AhIFBeRu+/hR3lBGgI5A6kedhepPALjW3jags96TnWo0jxchfSi3qpCKsXq5UVO9PeoXpXpkZxv8AD8xSfcamBo3gfmKg24+FSI9Vwp0Q/gHyFW71nbOb6uI/gX+UVfBqkMrpgf7M/l8684w+8+Fei9MT/Zn8vnXnOH3+VTfVTwWF7MDyAPoQa+jduFXwkl+KA6cTpavmxv8ACfka9r6bdL4cPgUizE4iaFCioRdQQPrHP2Ry4nhxqpU9TWdO4ijYtkRSLFm4a37JPHSvO9u7WjeTNHcgAC50uQTrbzrK2ltWWYgyyM9tFzEkDwHCqJNPrs+P6WereIxjOSWN/wDxYUGMM17DcrMdQOyupOtBzUxrO9NpzI3uhxyz5/uoxHcTpf0J9a7nG4xVgYA9oAK37Vv0v61wHRsG8gH3R8zXYJszOdSRfWwGuu4knQX8z3Uis/Vfo9h9XlO5N3e590euvlV7aLrePDqbtI6mX1AC/EmjYpo4FWLWwOc2te458/hVDZEF50kBDrdjfcQQpNmH2T6jkTQWLvTJ8qxJy7ZtzJ/Sp7MUmO3MqR6Vm7fxEcsjMzuvDKsYYC2lrlxf0rY2IgaLsklRvZuxYW3m17UHn46/ZUyLGAquQnZJGUKSDrqSL639KHjOkMa6NmTgMw0P8QuPjWBNtsuEigGVAxTstf3QDe5AvvqltnFplKsTYaXAzHxsSKacbO0drXQmIlsty2Q2YDiyg77VibM6Zi5SdEe3uvlAzDvHA1zDFQ2eKaRXjR5FBjAByAs1mEhscoY7je1FxaRTRickoSSGEaBrkWJIUuttGU6czQPl0+0emWCU2XD5jYG+UAX5d9cttnpGZdEjVAdwH61lY/CqER0csrZtWUIwZSAykBm4NGb3+1UMHh1ZXkdyioUHZQOzM+YgAFlA0Rze/wBnvpWrnMej9FLdWCLGwygfNvEnjytWz/8AzoibtGinmgyMfErYmuC2BtJEizLI7KGVO1GsdywY6WkbcF+Iro32gMubPYce4b7+FRWs5mNyV44lOQAMRbNvY+LHU+dcpj8ODmJUNffcXpbQxxX7V6yJttlRrSXJI5jGIAxyi+p7K5tPUn50Dq2P2D51ZxO0byF1C3O+6g39auQyFlDEAE62AsPIVrz+ub+rfn9jN+jt935VF4iN4tWvaqe0dw8auxnz3tYzbzTU77zTGs2yxDRr0CE0WqiKlelTUqpK48Nla+/tfnVbgfCtHaiWd15NLfyLaVmru8qVTzdj0vY7XhhP4F/lrRBrH2I31EH7C/KtUGmTK6YH+zP/AA/OvPMNvr0Lpd/uz+XzrzqE61N9VPCeS2vj+dVDISSTvNMzXqIqdayHvTXpU1JR6V6nFEW3cNaETQHonQLZtsO0pVfrCxUtqexdRlHjf17q6qXGxRHqwB1h97W9jxF/WuC6P9JrfR8PuUmKJtLAAtlLEnxJvVTA7VYTBpA3YktIPtb7P/Fv86qfviL/ALdDjcSkpIA1WNmDi+pUZiCL2Itf4UTYsLRRvIWsSAco5b9fK/rWIkssB6yyyR2Khl1iYMLdojVTY+61iOIpYnpCzKQsaLmBBN3Ju28i7W3c70/mjY6k9ViIyFEYk3BLDOeRB4+lF231eHh+jqSckfWSZWCs7XRLkkH73Kuf6FqwkOJNskWjMTxOtl79L+nOqz44zSYlz9qI+nXQ2pWYJ+tfY06KnZDAsSQGcObtZRqFXlVTEzCTErGScpkCtY/YDdo3/ZBoWy5byJyW7+UYL/4aysHKS8r3tkhnPm0ZiQ/9ciUBZw8YXFiI+6ZXgN/uyZoj8Gqnsqduqlj+0g61QTxi0kX/ALbux/dCm2xOevWQb2SGYeJjQn+8Gp8XMIMc771EpcjnFJqy+cb286Sjxyq8Eyn7BWYAfdY9VJbxZ4D/AAUCVxHhokJ1kMk5Fvsk9VH6dVIR3SU+Bw/VY04dj2XL4YtpqsqlEfwuyP5VLFwLPjRCD9WjLDmuNIcOuV3vyyxs3nSpwLFv1SQRDeE659/v4jKw/wDhWDTmWrZ+l2gCs1i41sRcL/q1YeLxYaZ5iAzSMzZSLhQfdW/cLDyoWJjJGbh5/C9TWnNxYgxzXyk3tuJ5fpT4nEszdprjhy8hwrID06yUYX00ZFgA+3m7rW9DQlxJtYE24UykEWPK4PfyoIBquajuSrBxTfeqDzE7zUL0r1es8itJvNQNTk3moVKxojRhQI6MDVRFSpU1KmToelkYjxeJUCwWeYAHeA1yB6GsCM6V03T4k47EllKlpEexFjYoo5CuXjO8Uqnjx6HsJv7NB3KPhethTXOdHMWow8YJGlx4do1qHaKDe6jzFPSwDpcf7K/8I+Nec8/A123SjaSPAUVgSSug7jeuIJqarlVNNT01S1aWwdhz4uTq4VBI1ZmOVVB4sfyGtWtubAOEmaF2DsoUkrot2F7Vp9Cukq4SNwMPG7s4bO2a4AWyroRoDc+dUOkG12xM7TMqqWsLKLCyi3rVyTEW3VJW97w/I1l1oht/hb4Gs6lVcmro4p0xHbZhFMffZtIpW++SP9nIeJPZY63XW+RsrBddKseYJcOSxBIARGcmw1OimtjZ+zIX7EeKVmOYj6qRQSFLWud26jn0deA4pp8MQwLxs3usp7LjjZlJV19RrUsNEuKuFjCTqL5YwFSYDeVTckg3kL2SL6AjV9jzZ2bDk3jkSW6ncHWJ3RwODBlGo4XG41Y6Cx5sUrAkdUjSi3Eiygf36dv6U8dztjBphMF9FQC4jdnbizhczEfxH4CuF2Zun/cH+tDXRbax8kzymR81oJQNABa3IVzezfdn/cH+tDU0+fF7BPlilflGQPF2Vf5S1ZWGsIcQ3E9TEP45DMf/AK3xq3ipMuF3+/Ko8o0Yn+qnpVHD4mHqTFIZVJlEl40RwQEyqDmdbWzOePvUURPHG8eGk3/VvGfGKZ7f3JEoG32B6lx9uCO55mO8DfGGo7RxMPUpHE0rFZJXJkRE0kSJcoCu19YgeG+lirthIGt7ks8V+SkRSoD5vL6UjPtUZ48PNxKdS/7cGUKf+00OvNTT7P8Aq4J5tbsFw6H8U12kN+6ONlP70UaNR9B1/wCOf6QqtN/uUX/Mz/0cPRYIpxOLa1J8QbWHr/lVe9NelitTVCaIIWOiqx8AaGGvR4sS6iwZhfkSKA1opVjiyyWJt2U5E7yxGt+69ZhxA5VN8Nqcui77toT3gb6qSDXffvpSC1ZYVGkp0FKtGavJvNQqcm81CkoRKMKhDCxGik+VF6lvun0NVE01KnKnkfSmppWcfjHkd3dixNrljc6Wtr5UAe8ajK1r34ioLINKVORbhkI/8CjfSG5+mnyqtCQf9d1IL41U8SnM5O8n41WNWXTs6f61qmisano4BTVJhUTUNFnBsRe3d+dSmktvFQwh3+X50dlvWk8RfQsOczWHG/oAST6XqpWrswKkiswuuqsPwsCp+dZZFTZipWj0blVcTFmNlYmMk6ACVWjzEngM9z4UfY8hglUupvG5DrubQlXXXc1sw8axjXX7Ph6+MPihY5RllDZZHA0GdSCH0sM2jG280pZPTst8Vti4BRMWimEzBZAiLHKrXkjZA0pdQkajNc2Zt1he9bmz8FHgkNmzyBHeZhawVFOVF7i5Re8sKqttzDRIY4lkA45MgLHmXa5+BrA2lthpAUVQiXBIBLM5G4yOfetc2AAUX3X1qd2rySNfC43P1pJv9RKf7tUdmv2cR/y5/rQVQ2ZjhEzFlLqyOjKGyGzi1w2U2PlVobQiCSCOB1aROrzNMHAGdHJCiJbnsAb+NVuozD7UY9Th1trkklP/ALkpRf7sK00wgiSEPh+td4hKzGV0tnd8oCrp7gT1NSn2jEyIr4eQ5I0juk6rcIoF7GEkXOtrnU1Ha2zp5E+lCLJCI4lUGRWZY0jRVJOm/Q7gSW3UUIfUSxTFMP1TRRrIpErvf66KNlKtwtITf8NBwXawuIW+qtBN/CpeFvO86elamx9iYiMkmNXV42jdBIEYiVRoGKkBlzRtuI3b9bGj2aEiumGZRi1SFGkxSuoM1pYyyiIEG8QPDUeNI2ZLpgV75/8A8qBP/uUf/Mz/ANHD10OC2eREIZIs4bLIpSUKO3ljG9DoSRytWX0igEUUcSx5F6yVwTMJSxIjRtAi5QMg379eVOlGAKanpCkYsGlyRe3j+VMXHC9/gKZnNRG+kBIzv7/jUWpWp11oCcVTpkGlPariKryb6LGtrsbcbaX1FuHLvqLxG9Re9IxvpMik9qx8qsttBsthYHnf8qzmOtSWjRgsmLk4ufLT5VWJokpoVFOL0y3oSR61c7H4j6VFbD7PrV4z1GNbCpKKdrngBUlFVCOd3rTAU7WFDeW/hQciliBZjQqPihrQKyvrRYwZ1NW8/K3pVHD76nJIN2+qlyFZq7hgXcJfVtB420FZaqScoBJva1tb8rc60cFgpJCMgsBvbcq+fPu31qrMmHuVs8p0Lka342HAVPXSueA8FstIAHnsz71j3he9uZ7t1Vto7RaQ79Kqz4hmNybmq5aoXufkJjUb1FmqOaqxOjxxX31ZPcLVVjkorXPHWrmRFTUC+pp5Xe1lkOUC1s5A7wBfdqaAA/IeZFJYhx08KNJL6U627Ti2UCztYZDdbWOliSRy4VJZiTmLMTcHViTcXsdeVz6mpFVtYetQEIBuKD1q4fGNayyHlbMRy4eQ9KDtCTODn1PPNc3qg043DzP6VBpu69O9RM5qvSFO1K1ZNCpAU4WnAoBmNERNL99QA0rQSMNYcBvpyFaAFsKY1emiqpILVpmIl0K1LLUWao5qk8J0oZ0ogb9KgKRo21onVioga0XNSNZJHOmziro2M1KbZZVSx3AXPlWudf4ZS8/5Uut7qNHDIdy28bCoRTKN1XIp6J/07+BYPZMs86wrbM3EmygXsST5jhxrf/8AROWQo2Kiyr2WYBhZ7qMoB962dbkbrjyzcPiyjh1NiPiDvFZuNMhY5XYgkmxY3uTc3tv140WYNtH6V4PDxOq4eV5BY5mbLa9xbLYD41hWopQ8dPGrWzMKHex3DU8vPu/8cazrTmfwNsnYeIm/2cZyn7TdhPU7/K9a0WzYcMCZ8s0vBBrGv7RIGY91Xsf0hsoROAtc1zE+ILEkm9TtaZIt7R2u8h+6o3KNAKzWeoO1QY0YV6SZqGxqN6V6adNSp6agjg0xY86Vqa1BpBzUs9DpCgh1ltRlmBqlT09GCsPI/Oh5TUlY01++gDRr43pMtjQg5piaAsNJeoM1CpGkBQRV2KccxWZSpy4VmtvrLiq2KF1zDzrOBoqynnVfSfnESaY0jTgaVKzU16Rao0BLNSz1GmpB3a4pSwuDluM1iM2XjYc7Xteul9ovRFMPgFxWFkaeKXKCSBcCTL1bLYbidPEiuKzjzPdXqnse6QIytgJ7FQTLDnsR2T1jJryK9YP4uVaddVjxzHN472TrDhsMDNIcfiSiJD2BGHIzyljlLZI4wxJG/LbiK1x7MtlpIuEk2m4xrKLIDCqliLi0ZUtrvy57ms3De0eObpBHiJGAwidZhomOgRXFuuPLM4FzpZSL7q9I2zhNqHF5sNFswwNlYTTRSNMpCj3srjMbjQi2luVZ7W2OC2R7LEkbEYeXEOmKg7ShQnVSRuD1MwBGbKSCrC9wVPcayeg3s9bGnEHEO+Hjw5MbFQubrV1dbsCAFA1/aHfVjpF03xGG2yk0kkEpwyCGf6KrqjRsxaSI53Yl1uDobZgBwNdR7XOl0SYRMPhWUnGr1rslv9g497TjJu8A3dV7U2Rzuw/ZVhJY3xeJxckODJJgJaNJGivZZpHZcqht4UDcRrwqr0y9nKYTCfS8BiDiMMcpkJZHbJewdXjAVkBOugtv1tp2uJ2au2tjYeKCRA8JizoSQokijKGN7aga5gba6c6BtuBdk7Bmw08iNLOssaIm7PMMtowbEqoOYm3PmKmqleCSSEk0MmjwwF9BYEDW+nlQ2w8g+wfSlirQSxqFias5DxAHiV/WnCMeKev+VPEarZKVqLkcmwU+Q/OjLgJOIA8T+lGDVS1K1WGwrd58B+Zqa4TmKMGxSJpZTV8wgUNo6MGqmWllqZqxDgHbW1h30YduKlOENaabPo6YKnOKj7jJSA0T6PWscPUTBVfBfbM6il1FaJgpmjo+R9Mxo6gUq+0dBaOlYqdKZFNVox0F1tU4eoU9NTigypXpjTXoBEVJIiauQYXS7elH3bhTnKb0pfRqbqKtMaCXp5BtbIB58KrY6RghIZh4EjeCra94JHmaVKipnrGWtKDb+MSPqkxeIWO1urWeVY7csga1qelUtGefdt31YjxB0uSbAAXJNgNwF9w7qVKnCa2ydpvEXaOWSNrA5o3eNiAdxZCDbXdTYLPiHM+IkeZ9wMrtIbDUasSbC9KlVeov5AtoYVS3aVgea2se+qf0BOLsPFDSpUUSjRYKG/vg+JtV6PCr9kL5AUqVPnB0PkI5+WlBlzW+yBzOvypUqpMCWC+pYnwFhUjAKVKkNUJ5VHEfOhQRtK1kGnEnQDxpUqj2406/8zWthsDHH+JuLHcPAVYzrT0q0kxh6iZVphKKVKmMI01qVKgGZKE0dKlQFWaq8epp6VQ0nhSx23VTkpUqXSuQqalSrNZjRsMyg3P+VKlQF8TA8ai8tKlWmoxXkfv8qAzUqVTVSP/Z",
    
      averageRating: 4.0,
      genre: 'Pop',
      duration: '2:21',
      releaseYear: 2021,
      totalRatings: 2356
    },
    {
      id: 9,
      title: 'Good 4 U',
      artist: 'Olivia Rodrigo',
      image: 'https://i.scdn.co/image/ab67616d0000b273a91c10fe9472d9bd89802e5a',
      averageRating: 4.4,
      genre: 'Pop',
      duration: '2:58',
      releaseYear: 2021,
      totalRatings: 1987
    },
    {
      id: 10,
      title: 'Blinding Lights',
      artist: 'The Weeknd',
      image: 'https://i.scdn.co/image/ab67616d0000b2738863bc11d2aa12b54f5aeb36',
      averageRating: 4.2,
      genre: 'Pop',
      duration: '3:20',
      releaseYear: 2019,
      totalRatings: 3245
    },
  ];

  const allItems = [...recommendedItems, ...trendingItems];

  const handleRating = (rating: number): void => {
    const updatedItem: MusicItem = { 
      ...currentItem, 
      userRating: rating,
      ratingDate: new Date().toISOString().split('T')[0]
    };
    setCurrentItem(updatedItem);

    const newRecentlyRated: MusicItem[] = [
      updatedItem,
      ...recentlyRated.filter((item) => item.id !== updatedItem.id),
    ].slice(0, 3);

    setRecentlyRated(newRecentlyRated);
    
    // Add to rating history if not already there
    if (!ratingHistory.some(item => item.id === updatedItem.id)) {
      setRatingHistory([updatedItem, ...ratingHistory]);
    }
  };

  const handleRateRecommended = (item: MusicItem): void => {
    setCurrentItem({
      ...item,
      userRating: 0,
      totalRatings: item.totalRatings || Math.floor(Math.random() * 1000) + 100,
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderStars = (rating: number | undefined, size = 'base') => {
    if (rating === undefined) return null;
    
    const starClass = size === 'small' ? 'text-lg' : 
                     size === 'xsmall' ? 'text-md' : 
                     size === 'large' ? 'text-2xl' : 'text-xl';
    
    return (
      <div className={`flex ${size === 'small' ? 'gap-1' : 'gap-1.5'}`}>
        {[1, 2, 3, 4, 5].map((star) => (
          <span key={star}>
            {star <= Math.floor(rating) ? (
              <FaStar className={`text-yellow-400 ${starClass}`} />
            ) : star === Math.ceil(rating) && rating % 1 >= 0.5 ? (
              <FaStarHalfAlt className={`text-yellow-400 ${starClass}`} />
            ) : (
              <FaRegStar className={`text-gray-300 ${starClass}`} />
            )}
          </span>
        ))}
      </div>
    );
  };

  const filteredItems = allItems.filter(item => 
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    item.artist.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen max-h-screen overflow-y-auto bg-gradient-to-b from-gray-900 to-gray-800 text-white p-4 md:p-8">
      <header className="mb-8 text-center relative">
        <h1 className="text-3xl md:text-4xl font-bold flex items-center justify-center gap-3">
          <FaMusic className="text-purple-400 text-4xl" /> Rate Music
        </h1>
        <p className="text-gray-400 mt-2 text-lg">Share your opinion on our content</p>
        
        <div className="absolute top-0 right-0 flex gap-3">
          <button 
            onClick={() => setShowRatingHistory(!showRatingHistory)}
            className="p-3 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors"
            aria-label="Rating history"
          >
            <FaHistory className="text-purple-400 text-xl" />
          </button>
        </div>
      </header>

      {/* Rating History Modal */}
      {showRatingHistory && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-800 rounded-xl p-6 max-w-4xl w-full max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">Your Rating History</h2>
              <button 
                onClick={() => setShowRatingHistory(false)}
                className="p-2 hover:bg-gray-700 rounded-full"
              >
                <FaTimes className="text-xl" />
              </button>
            </div>
            
            {ratingHistory.length === 0 ? (
              <p className="text-gray-400 text-lg">You haven't rated any songs yet.</p>
            ) : (
              <div className="space-y-4">
                {ratingHistory.map((item) => (
                  <div key={item.id} className="bg-gray-700 rounded-lg p-4 flex items-center gap-4">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-16 h-16 rounded object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-lg truncate">{item.title}</h3>
                      <p className="text-gray-400 text-md truncate">{item.artist}</p>
                      <div className="mt-2 flex items-center gap-3">
                        {renderStars(item.userRating, 'small')}
                        <span className="text-gray-300 text-sm">
                          {item.ratingDate}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Current Item Card */}
      <div className="bg-gray-800 rounded-xl p-6 md:p-8 mb-10 shadow-lg transition-all duration-300 hover:shadow-xl">
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center">
          <img 
            src={currentItem.image} 
            alt={currentItem.title} 
            className="w-48 h-48 md:w-56 md:h-56 rounded-lg object-cover shadow-md"
          />
          <div className="flex-1 w-full">
            <h2 className="text-2xl md:text-3xl font-bold">{currentItem.title}</h2>
            <p className="text-gray-400 text-xl">{currentItem.artist}</p>
            
            {currentItem.genre && (
              <div className="mt-3 flex flex-wrap gap-3">
                {currentItem.genre && (
                  <span className="px-3 py-1.5 bg-gray-700 rounded-full text-sm">
                    {currentItem.genre}
                  </span>
                )}
                {currentItem.duration && (
                  <span className="px-3 py-1.5 bg-gray-700 rounded-full text-sm">
                    {currentItem.duration}
                  </span>
                )}
                {currentItem.releaseYear && (
                  <span className="px-3 py-1.5 bg-gray-700 rounded-full text-sm">
                    {currentItem.releaseYear}
                  </span>
                )}
              </div>
            )}
            
            <div className="mt-4 md:mt-6">
              <h3 className="text-lg text-gray-400 mb-2">Community Rating</h3>
              <div className="flex items-center gap-3">
                {renderStars(currentItem.averageRating)}
                <span className="text-gray-300 text-lg">
                  {(currentItem.averageRating ?? 0).toFixed(1)} ({(currentItem.totalRatings ?? 0).toLocaleString()} ratings)
                </span>
              </div>
            </div>
          </div>

          <div className="w-full md:w-auto mt-6 md:mt-0">
            <h3 className="text-xl font-semibold mb-3 text-center md:text-left">Your Rating</h3>
            <div className="flex gap-2 justify-center md:justify-start">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => handleRating(star)}
                  onMouseEnter={() => setHoverRating(star)}
                  onMouseLeave={() => setHoverRating(0)}
                  className="focus:outline-none transform hover:scale-125 transition-transform"
                  aria-label={`Rate ${star} star`}
                >
                  {(hoverRating || (currentItem.userRating ?? 0)) >= star ? (
                    <FaStar className="text-yellow-400 text-4xl" />
                  ) : (
                    <FaRegStar className="text-gray-400 text-4xl" />
                  )}
                </button>
              ))}
            </div>
            {currentItem.userRating && currentItem.userRating > 0 && (
              <p className="text-center md:text-left mt-2 text-lg text-gray-300">
                You rated this {currentItem.userRating} star{currentItem.userRating !== 1 ? 's' : ''}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Recently Rated Section */}
      {recentlyRated.length > 0 && (
        <section className="mb-10 md:mb-14">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <FaHistory className="text-purple-400 text-2xl" /> Recently Rated
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[...recentlyRated].reverse().map((item) => (
              <div 
                key={item.id} 
                className="bg-gray-700 rounded-xl p-4 hover:bg-gray-600 transition-colors duration-200 cursor-pointer"
                onClick={() => handleRateRecommended(item)}
              >
                <div className="flex gap-4 items-center">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-20 h-20 md:w-24 md:h-24 rounded-lg object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-lg truncate">{item.title}</h3>
                    <p className="text-gray-400 text-md truncate">{item.artist}</p>
                    <div className="mt-2 flex items-center gap-3">
                      {renderStars(item.userRating, 'small')}
                      {item.userRating && (
                        <span className="text-gray-300 text-md">
                          {item.userRating.toFixed(1)}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Search Section */}
      <section className="mb-8">
        <div className="relative">
          <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
          <input
            type="text"
            placeholder="Search songs or artists..."
            className="w-full bg-gray-700 rounded-xl pl-12 pr-5 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 text-lg"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white text-xl"
            >
              <FaTimes />
            </button>
          )}
        </div>
      </section>

      {/* Recommendations/Trending Section */}
      <section>
        <div className="flex border-b border-gray-700 mb-6">
          <button
            className={`px-6 py-3 font-medium text-lg ${activeTab === 'recommended' ? 'text-purple-400 border-b-2 border-purple-400' : 'text-gray-400'}`}
            onClick={() => setActiveTab('recommended')}
          >
            Recommendations
          </button>
          <button
            className={`px-6 py-3 font-medium text-lg flex items-center gap-2 ${activeTab === 'trending' ? 'text-purple-400 border-b-2 border-purple-400' : 'text-gray-400'}`}
            onClick={() => setActiveTab('trending')}
          >
            <IoMdTrendingUp className="text-xl" /> Trending
          </button>
        </div>

        {searchQuery ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {filteredItems.map((item) => (
              <div 
                key={item.id} 
                className="bg-gray-700 rounded-xl p-4 hover:bg-gray-600 transition-colors duration-200"
              >
                <div className="flex gap-4">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-20 h-20 md:w-24 md:h-24 rounded-lg object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-lg truncate">{item.title}</h3>
                    <p className="text-gray-400 text-md truncate">{item.artist}</p>
                    
                    <div className="flex items-center gap-3 mt-2">
                      {renderStars(item.averageRating, 'xsmall')}
                      <span className="text-gray-300 text-md">
                        {item.averageRating?.toFixed(1)}
                        {item.totalRatings && ` (${item.totalRatings.toLocaleString()})`}
                      </span>
                    </div>
                    
                    {item.genre && (
                      <span className="inline-block mt-2 px-3 py-1 bg-gray-600 rounded-full text-sm">
                        {item.genre}
                      </span>
                    )}
                    
                    <button 
                      onClick={() => handleRateRecommended(item)}
                      className="mt-4 px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg text-md transition-colors w-full"
                    >
                      Rate This
                    </button>
                  </div>
                </div>
              </div>
            ))}
            {filteredItems.length === 0 && (
              <p className="text-gray-400 col-span-full text-center py-6 text-lg">
                No results found for "{searchQuery}"
              </p>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {(activeTab === 'recommended' ? recommendedItems : trendingItems).map((item) => (
              <div 
                key={item.id} 
                className="bg-gray-700 rounded-xl p-4 hover:bg-gray-600 transition-colors duration-200"
              >
                <div className="flex gap-4">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-20 h-20 md:w-24 md:h-24 rounded-lg object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-lg truncate">{item.title}</h3>
                    <p className="text-gray-400 text-md truncate">{item.artist}</p>
                    
                    <div className="flex items-center gap-3 mt-2">
                      {renderStars(item.averageRating, 'xsmall')}
                      <span className="text-gray-300 text-md">
                        {item.averageRating?.toFixed(1)}
                        {item.totalRatings && ` (${item.totalRatings.toLocaleString()})`}
                      </span>
                    </div>
                    
                    {item.genre && (
                      <span className="inline-block mt-2 px-3 py-1 bg-gray-600 rounded-full text-sm">
                        {item.genre}
                      </span>
                    )}
                    
                    <button 
                      onClick={() => handleRateRecommended(item)}
                      className="mt-4 px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg text-md transition-colors w-full"
                    >
                      Rate This
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>




      <div className="bg-gray-800 rounded-xl p-6 md:p-8 mb-10 shadow-lg transition-all duration-300 hover:shadow-xl">
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center">
          <div
            
            className="w-48 h-48 md:w-56 md:h-56 rounded-lg object-cover shadow-md"
          /> 
          <div className="flex-1 w-full">
            <h2 className="text-2xl md:text-3xl font-bold">Rate Your Experience</h2>
            <p className="text-gray-400 text-xl">(Upto 5 star)</p>
            
            {/* {currentItem.genre && (
              <div className="mt-3 flex flex-wrap gap-3">
                {currentItem.genre && (
                  <span className="px-3 py-1.5 bg-gray-700 rounded-full text-sm">
                    {currentItem.genre}
                  </span>
                )}
                {currentItem.duration && (
                  <span className="px-3 py-1.5 bg-gray-700 rounded-full text-sm">
                    {currentItem.duration}
                  </span>
                )}
                {currentItem.releaseYear && (
                  <span className="px-3 py-1.5 bg-gray-700 rounded-full text-sm">
                    {currentItem.releaseYear}
                  </span>
                )}
              </div>
            )}
             */}


            {/* <div className="mt-4 md:mt-6">
              <h3 className="text-lg text-gray-400 mb-2">Community Rating</h3>
              <div className="flex items-center gap-3">
                {renderStars(currentItem.averageRating)}
                <span className="text-gray-300 text-lg">
                  {(currentItem.averageRating ?? 0).toFixed(1)} ({(currentItem.totalRatings ?? 0).toLocaleString()} ratings)
                </span>
              </div>
            </div> */}
          </div>

          <div className="w-full md:w-auto mt-6 md:mt-0">
            <h3 className="text-xl font-semibold mb-3 text-center md:text-left">Your Rating</h3>
            <div className="flex gap-2 justify-center md:justify-start">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => handleRating(star)}
                  onMouseEnter={() => setHoverRating(star)}
                  onMouseLeave={() => setHoverRating(0)}
                  className="focus:outline-none transform hover:scale-125 transition-transform"
                  aria-label={`Rate ${star} star`}
                >
                  {(hoverRating || (currentItem.userRating ?? 0)) >= star ? (
                    <FaStar className="text-yellow-400 text-4xl" />
                  ) : (
                    <FaRegStar className="text-gray-400 text-4xl" />
                  )}
                </button>
              ))}
            </div>
            {currentItem.userRating && currentItem.userRating > 0 && (
              <p className="text-center md:text-left mt-2 text-lg text-gray-300">
                You rated this {currentItem.userRating} star{currentItem.userRating !== 1 ? 's' : ''}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RateUs;