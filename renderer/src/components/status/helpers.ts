import { StatusType } from './types'
import { sStatusPositive, sStatusNegative } from './styles'

export const getStatusTypeStyle = (type: StatusType): string => {
    switch (type) {
        case 'positive':
            return sStatusPositive
        case 'negative':
            return sStatusNegative
    }
}
