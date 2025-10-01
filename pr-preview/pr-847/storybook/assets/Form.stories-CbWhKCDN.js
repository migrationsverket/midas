import{j as n}from"./iframe-BxHqCU2u.js";import{$ as j}from"./Form-yG8w1SKd.js";import{G}from"./Grid-DxVX-0NL.js";import{G as e}from"./GridItem-11sIPZYg.js";import{T as r}from"./TextField-DoMqktzA.js";import{S as I}from"./Select-CHsPFVr1.js";import{B as a}from"./Button-CB1wrnsH.js";import{R as g,a as b}from"./Radio-V7UpmFWT.js";import{C as h}from"./CheckboxGroup-BSU-bVZG.js";import{C as k}from"./Checkbox-BYPnsrAL.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-BS0Ytho5.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-CQ8-VO9r.js";import"./useFocusRing-DhiYaB0Q.js";import"./index-CwQtN2vM.js";import"./index-CDIrfYxL.js";import"./TextFieldBase-CHr4VgHB.js";import"./TextField-Dli9O8kl.js";import"./FieldError-cbqNcA8P.js";import"./Text-DhvUwSIq.js";import"./Text-CWcsiO95.js";import"./context-Tx_d3J08.js";import"./SelectionManager-DJ_Fooa-.js";import"./useEvent-Bf6cTY-U.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-DGo5Xwy9.js";import"./useDescription-y2wCJUjw.js";import"./useControlledState-BayoQJEG.js";import"./Group-DVu4EOrv.js";import"./Input-uGyFGOHZ.js";import"./Hidden-BDZrU9Kf.js";import"./Button-ibvlP6vr.js";import"./useLabels-Y8RB1b2m.js";import"./useButton-D329u3yQ.js";import"./useTextField-BqhDLCYk.js";import"./useField-BH0R5rVt.js";import"./TextField.module-DjUItNl5.js";import"./Label-84Z4N5Xw.js";import"./Dialog-hUIKyHvD.js";import"./RSPContexts-vAjlp9wO.js";import"./OverlayArrow-yibbO2Yz.js";import"./useResizeObserver-CZmCiVvE.js";import"./Collection-COd-09w7.js";import"./index-DiBI6CnM.js";import"./Separator-B1NYQSPc.js";import"./PressResponder-l6AldazZ.js";import"./useLocalizedStringFormatter-DzkHTui5.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-D5QeShy4.js";import"./useLocalizedStringFormatter-BxhyP3Wz.js";import"./x-B6-RsHPU.js";import"./createLucideIcon-d1ullI0J.js";import"./Heading-6qMC6f9Q.js";import"./info-BsySFHHC.js";import"./Popover-C4PtpC_v.js";import"./Tag-B1ZQoKfM.js";import"./ListBox-Dzn1lbZS.js";import"./DragAndDrop-BYQnONQj.js";import"./inertValue-Z2WgZjWp.js";import"./useListState-pXav3C_q.js";import"./useHighlightSelectionDescription-EMgmG-0y.js";import"./useUpdateEffect-BQcaj0IR.js";import"./useHasTabbableChild-BjTg8W1f.js";import"./check-Bq6KVful.js";import"./ListBoxSection-BZC8ukEp.js";import"./Virtualizer-D-CVVJZS.js";import"./useObserveElement-YeRoT-0Z.js";import"./chevron-down-j3rsxEh7.js";import"./Button.module-DRhvPh0f.js";import"./useToggleState-BVkJAUaj.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
