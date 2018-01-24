exports.decorateTab = (Tab, { React }) => {

    return class extends React.Component {
        constructor(props, context) {
            super(props, context)
            this.handleKeyClick = this.handleKeyClick.bind(this)
        }

        handleKeyClick(e) {
            if(!e.altKey) return

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
                        style: {
                            display: 'inline-block',
                            height: '100%',
                            width: '100%'
                        }
                    },
                    currentText
                )
            })

            return React.createElement(Tab, props)
        }
    }
}