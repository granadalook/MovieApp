/* eslint-disable react-hooks/rules-of-hooks */
import {ScrollView} from 'react-native';
import {Detail} from '../interface/MovieDetail';
import React, {useEffect, useState} from 'react';
import Headers from '../components/details/header';
import {getMovieDetailById} from '../api/moviesApi';
import Description from '../components/details/description';

export default function detail(props: any) {
  const {
    route: {params},
    navigation,
  } = props;
  const [details, setDetail] = useState<Detail>();
  useEffect(() => {
    (async () => {
      try {
        const response = await getMovieDetailById(params.id);
        setDetail(response!.data);
      } catch (error) {
        navigation.goBack();
      }
    })();
  }, [navigation, params]);
  if (!details) {
    return null;
  }
  return (
    <ScrollView>
      <Headers
        title={details.title}
        imagebg={details.backdrop_path}
        lenguage={details.original_language}
      />
      <Description
        overview={details.overview}
        tagline={details.tagline}
        date={details.release_date}
        time={details.runtime}
      />
    </ScrollView>
  );
}
