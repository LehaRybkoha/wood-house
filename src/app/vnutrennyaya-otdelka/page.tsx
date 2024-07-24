import {ImageSlider} from '@/components/ImageSlider/ImageSlider';
import {Card, Text} from '@gravity-ui/uikit';
import css from './styles.module.scss';

export default function CutTypes() {
    return (
        <div>
            <div className={css.CutTypes__content}>
                <div className={'base-block'}>
                    <Card view="raised" type="container" size="l" style={{}}>
                        <div className={'base-card'}>
                            <Text variant="display-2" color="brand" className="main-title">
                                Внутренняя и внешняя отделка сруба домов и бань
                            </Text>
                            <Text variant="body-3" color="dark-complementary" className="base-desc">
                                Компания «Русский Сруб» рада предложить Вам высококачественную
                                внутреннюю отделку срубов бань и домов под ключ. Эта услуга включает
                                абсолютно все работы по внутренней отделке. Сама отделка
                                производится по материалам, которые предоставляет заказчик. А в
                                случае если Вы не смогли выбрать подходящий материал, наши
                                специалисты смогут вам помочь и посоветовать подходящий материал для
                                отделки сруба в каждом конкретном случае, а также приобрести его и
                                предоставить вам все товарные чеки. Если Вы планируете строить баню,
                                то мы сможем помочь Вам с выбором для нее печи. Наша строительная
                                бригада – это команда профессиональных мастеров, которые являются
                                гражданами Российской Федерации.
                            </Text>
                            <ImageSlider />
                            <Text variant="body-3" color="dark-complementary" className="base-desc">
                                Мы готовы провести любые консультации по телефону и примем любые
                                ваши заявки. Кроме того, Вы можете присылать свои проекты нам на
                                электронную почту. Стоимость всех работ рассчитывается строго
                                согласно ценам, указанным в прайс-листе.
                                <br />
                                <br />
                                Стоимости работ указанные в нашем прайс-листе действующие.
                            </Text>
                        </div>
                    </Card>
                </div>
                <div className={'base-block'}>
                    <Card view="raised" type="container" size="l">
                        <div className={'base-card'}>
                            <Text variant="display-2" color="complementary" className="main-title">
                                УСЛУГИ ПО ОТДЕЛКЕ СРУБА
                            </Text>
                            <div>
                                <Text
                                    variant="body-3"
                                    color="dark-secondary"
                                    className="main-title"
                                    style={{
                                        marginLeft: 16,
                                    }}
                                >
                                    <ul>
                                        <li>
                                            Внутренняя и внешняя отделка бани или дома под ключ.
                                        </li>
                                        <li>Высокое качество по умеренным ценам.</li>
                                        <li>Любые виды кровельных работ под ключ.</li>
                                        <li>Обработка сруба рубанком и шлифовка.</li>
                                        <li>Изготовление деревянных лестниц.</li>
                                        <li>Изготовление деревянных беседок.</li>
                                        <li>Покраска и обработка антисептиком.</li>
                                        <li>Изготовление крыльца и веранды.</li>
                                        <li>Полки для парной любой конфигурации.</li>
                                        <li>Установка металлической печи.</li>
                                        <li>Кладка и кирпичной печи.</li>
                                        <li>Устройство канализации(септик).</li>
                                    </ul>
                                    <br />И другие работы по отделке сруба. Все вопросы по отделке
                                    обсуждаются по телефону.
                                </Text>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}
