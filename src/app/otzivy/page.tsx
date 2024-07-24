import {Banner} from '@/components/Banner/Banner';
import {Promotion} from '@/components/Promotion/Promotion';
import {Card, Text} from '@gravity-ui/uikit';
import css from './styles.module.scss';

export default function CutTypes() {
    return (
        <div>
            <div className={css.CutTypes__content}>
                <Banner />
                <Promotion />
                <div className={'base-block'}>
                    <Card
                        view="raised"
                        type="container"
                        size="l"
                        style={{
                            maxWidth: 1100,
                        }}
                    >
                        <div className={'base-card'}>
                            <Text variant="display-2" color="brand" className="main-title">
                                Видео с отзывами о «Русском Срубе» Друзья
                            </Text>
                            <Text variant="body-3" color="dark-complementary" className="base-desc">
                                Друзья, многим из вас сложно поверить, что мы действительно так
                                ответственно подходим к своей работе, что наши заказчики готовы
                                оставлять даже видео-отзывы про свои срубы. Тем не менее, мы рады,
                                что вы это делаете и с удовольствием их публикуем.
                            </Text>
                            <div className="base-videos">
                                <div className="video video--enabled">
                                    <iframe
                                        src="https://www.youtube.com/embed/geS_QAlksdk?rel=0&amp;showinfo=0&amp;autoplay=1"
                                        className="video__media"
                                    ></iframe>
                                </div>
                                <div className="video video--enabled">
                                    <iframe
                                        src="https://www.youtube.com/embed/geS_QAlksdk?rel=0&amp;showinfo=0&amp;autoplay=1"
                                        className="video__media"
                                    ></iframe>
                                </div>
                                <div className="video video--enabled">
                                    <iframe
                                        src="https://www.youtube.com/embed/geS_QAlksdk?rel=0&amp;showinfo=0&amp;autoplay=1"
                                        className="video__media"
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}
