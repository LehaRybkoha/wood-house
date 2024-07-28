import {Banner} from '@/components/Banner/Banner';
import {Promotion} from '@/components/Promotion/Promotion';
import {Card, Text} from '@gravity-ui/uikit';
import css from './styles.module.scss';

export default function WoodCutter() {
    return (
        <div>
            <div className={css.WoodCutter__content}>
                <Banner />
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
                                Срубы ручной рубки с доставкой и сборкой
                            </Text>
                            <Text variant="body-3" color="dark-complementary" className="base-desc">
                                Наша компания уже более 20 лет работает для вас. Индивидуальный
                                подход к каждому проекту позволит вам получить действительно
                                качественный сруб. В нашей работе мы используем отборный строевой
                                лес, объем которого ограничен, но мы получаем прямые квоты на добычу
                                и выбор делянок. Бесплатная доставка и сборка рубленных домов и бань
                                производится в Москве и области, Санкт-Петербурге и области,
                                Калужской, Тульской, Смоленской, Тверской, Псковской и Брянской
                                областях. Доставка в другие регионы РФ и республику Белоруссию
                                согласуются отдельно.
                            </Text>
                        </div>
                    </Card>
                </div>
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
                                Обработка сруба под рубанок бесплатно!
                            </Text>

                            <Text variant="body-3" color="dark-complementary" className="base-desc">
                                Закажите сруб сейчас и вы сможете сэкономить на обработке сруба
                                рубанком! Хотите сразу чистовое бревно, требующее исключительно
                                шлифовки? Тогда это решение для вас.
                                <br />
                                <br />
                                Помимо декоративных преимуществ обработка тревна рубанком имеет так
                                же и практический смысл. Прежде всего, чистое бревно лучше впитывает
                                антисептические составы, которые блокируют появление плесени, мха,
                                паразитов в ходе усадки. Также, при финальной отделке экономится
                                значительное время и силы на шлифовку.
                            </Text>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}
