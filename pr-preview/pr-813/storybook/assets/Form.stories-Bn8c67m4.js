import{j as n}from"./iframe-_lRz8YFu.js";import{$ as j}from"./Form-BWUSBr3G.js";import{G}from"./Grid-xpp5F5JF.js";import{G as e}from"./GridItem-SqpEezmO.js";import{T as r}from"./TextField-irB-lqye.js";import{S as I}from"./Select-BFOT0ChN.js";import{B as a}from"./Button-CSo9cgjK.js";import{R as g,a as b}from"./Radio-GtbD26oi.js";import{C as h}from"./CheckboxGroup-hDUeS_Ry.js";import{C as k}from"./Checkbox-41ZLKiUq.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-BUmaUPeH.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-B6Ygqx9J.js";import"./useFocusRing-sAwqsfDC.js";import"./index-xW6Vd_PP.js";import"./index-CyglFFdH.js";import"./TextFieldBase-WeYuXroE.js";import"./TextField-DwpkIBKo.js";import"./FieldError-RXzNNgFu.js";import"./Text-w35hOI-7.js";import"./Text-KTWhHybg.js";import"./ListKeyboardDelegate-WVUEsQ_r.js";import"./SelectionManager-DaiRSpOb.js";import"./useEvent-zPAT1qr-.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-CcqDJ-LX.js";import"./useDescription-BQuP6H2R.js";import"./useControlledState-CyXMqpQO.js";import"./Group-Dt39du0g.js";import"./Input-BMtzzKqd.js";import"./Hidden-Ds4lnupb.js";import"./Button-W_ikXVQB.js";import"./useLabels-BcYo1CVh.js";import"./useButton-CpO7hjdn.js";import"./useTextField-TdHpfvGA.js";import"./useField-DXsj8dAW.js";import"./TextField.module-DjUItNl5.js";import"./Label-CeHL0M1s.js";import"./Dialog-CQnFMDId.js";import"./RSPContexts-DTsj3GGB.js";import"./OverlayArrow-C6OvgbSB.js";import"./useResizeObserver-BeKoq8EI.js";import"./Collection-C19nHrW7.js";import"./index-B0RpjRRR.js";import"./Separator-BDXklYB8.js";import"./PressResponder-CALrPqh8.js";import"./useLocalizedStringFormatter-BpggfE7y.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-flOKmZI2.js";import"./Dialog-CNjfg3eD.js";import"./useLocalizedStringFormatter-D3D8J9gt.js";import"./x-C-m0IpWp.js";import"./createLucideIcon-DcItXkQX.js";import"./Heading-BaXAvx0X.js";import"./info-B80VVGZ8.js";import"./Tag-DOzfK7ce.js";import"./ListBox-DLLAbyF7.js";import"./DragAndDrop-C2e9FM-3.js";import"./inertValue-S2-P1AD8.js";import"./useListState-BunlHBee.js";import"./useHighlightSelectionDescription-DBSvQLxs.js";import"./useUpdateEffect-CEvymFCB.js";import"./useHasTabbableChild-CgNxOkhm.js";import"./check-tiDeFLAI.js";import"./ListBoxSection-xaRZk5RE.js";import"./Virtualizer-CPC7dhZ-.js";import"./useObserveElement-B-1dY1Ce.js";import"./chevron-down-_d7yM5z5.js";import"./Button.module-DRhvPh0f.js";import"./useToggleState-DCaRdHN_.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {},
  render: () => {
    const ITEMS = ['Banan', 'Apple', 'Mango'];
    return <Grid>
        <GridItem size={12}>
          <TextField label='Ange ditt fullständiga namn' description='Glöm inte dina eventuella mellannamn!' />
        </GridItem>
        <GridItem size={12}>
          <TextField label='Personnummmer' description='Anges på formen ÅÅMMDD-XXXX' />
        </GridItem>
        <GridItem size={12}>
          <Select label='Vilken är din favoritfrukt' placeholder='Välj en frukt' selectionMode='single' options={ITEMS.map(i => ({
          id: i,
          name: i
        }))} />
        </GridItem>

        <GridItem>
          <Button>Skicka</Button>
        </GridItem>
      </Grid>;
  }
}`,...(p=(l=m.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var c,x,u;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {},
  render: () => {
    const ITEMS = ['A', 'B', 'C'];
    const RADIOITEMS = ['Anledning A', 'Anledning B', 'Anledning C'];
    return <div>
        <Grid>
          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <RadioGroup label='Anledning' description='Ange anledning till att du söker i databasen'>
              {RADIOITEMS.map((item: string) => <Radio value={item} key={item}>
                  {item}
                </Radio>)}
            </RadioGroup>
          </GridItem>
          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <CheckboxGroup label='Databas' description='Välj databas att söka i'>
              {ITEMS.map((item: string) => <Checkbox value={item} key={item}>
                  {item}
                </Checkbox>)}
            </CheckboxGroup>
          </GridItem>
          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <TextField label='Namn' description='' />
          </GridItem>
          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <TextField label='Personnummer' />
          </GridItem>

          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <Select label='Kön' description='Kan lämnas tomt' placeholder='Välj kön' selectionMode='single' options={ITEMS.map(i => ({
            name: i,
            id: i
          }))} />
          </GridItem>
          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <TextField label='Ärendekod' />
          </GridItem>

          <GridItem size='auto'>
            <Button>Sök</Button>
          </GridItem>
          <GridItem size='auto'>
            <Button variant='secondary'>Rensa</Button>
          </GridItem>
        </Grid>
      </div>;
  }
}`,...(u=(x=s.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};const wn=["SimpleForm","TwoColumnForm"];export{m as SimpleForm,s as TwoColumnForm,wn as __namedExportsOrder,$n as default};
