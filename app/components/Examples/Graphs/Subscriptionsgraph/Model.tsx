import { useEffect, useMemo, useState } from 'react'
import useTranslation from 'hooks/useTranslation'
import View from './View';

type Props = {

}

const ViewModel: React.FC<Props> = () => {
	const [series, setSeries] = useState<Array<any>>([])
    const { t } = useTranslation()

    const options = useMemo(() => {
        let final: any = []
            final = {
                chart: {
                    type: 'column'
                },
                title: {
                    text: 'Catégories'
                },
                yAxis: {
                    title: {
                        text: 'Catégories'
                    }
                },
                plotOptions: {
                    column: {
                        dataLabels: {
                            enabled: true
                        }
                    }
                },
                credits: {
                    enabled: false
                },
                xAxis: {
                    categories: [
                        'Il y a trente jours',
                        'Il y a sept jours',
                        'Hier',
                    ],
                    crosshair: true
                },
                colors: ['#68A672','#6204BF','#0d353d33']
            }

            final.series = [
                {
                    type: 'column',
                    name: 'Catégorie 1',
                    data: [10, 75, 312],
                    
                },
                {
                    type: 'column',
                    name: 'Catégorie 2',
                    data: [16, 70, 123]
                },
                {
                    type: 'column',
                    name: 'Catégorie 3',
                    data: [2, 4, 8]
                },{
                    type: 'spline',
                    name: 'Connexions',
                    data: [84, 45, 138],
                    marker: {
                        lineWidth: 2,
                        lineColor: 'orange',
                        fillColor: 'white'
                    }
                }
            ]
        
        return final
    }, [])

    return (
        <View 
            options={options}
        />
    )
};

export default ViewModel;

