exports.decorateConfig = (config) => {
    config.hyperTabClose = Object.assign({
        stopActiveClose: false,
    }, config.hyperTabClose)

    return config;
}

exports.decorateTab = (Tab, { React }) => {
    const style = {
        display: 'inline-block',
        height: '100%',
        width: '100%'
    }

    return class extends React.Component {
        constructor(props, context) {
            super(props, context)
            this.handleKeyClick = this.handleKeyClick.bind(this)
            this.config = config.getConfig().hyperTabClose
        }

        handleKeyClick(e) {
            if(!e.altKey) return
            
            if(this.config.stopActiveClose && this.props.isActive) return

            e.stopPropagation()
            this.props.onClose()
        }

        render() {
            const currentText= this.props.text
            const props = Object.assign({}, this.props, {
                text: React.createElement(
                    'span',
                    {
                        onClick: this.handleKeyClick,
                        style
                    },
                    currentText
                )
            })

            return React.createElement(Tab, props)
        }
    }
}