import{j as n}from"./iframe-CF8NSoMg.js";import{$ as j}from"./Form-Bud_t8bW.js";import{G}from"./Grid-BRCxltJS.js";import{G as e}from"./GridItem-BgrvJzFH.js";import{T as r}from"./TextField-CKjgwQYh.js";import{S as I}from"./Select-Bjakj0Fs.js";import{B as a}from"./Button-CrIUuTAK.js";import{R as g,a as b}from"./Radio-0oanVkRw.js";import{C as h}from"./CheckboxGroup-Cc6u5bVm.js";import{C as k}from"./Checkbox-CPID-rNc.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-DXxMpZrY.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-BLR5tDAY.js";import"./useFocusRing-w2Vwm9Ha.js";import"./index-By5I7u-u.js";import"./index-BAi9aBeU.js";import"./TextFieldBase-4WcScZJD.js";import"./TextField-D8Be5F5O.js";import"./FieldError-By8BlUAG.js";import"./Text-B6qmPVEy.js";import"./Text-gusH24yF.js";import"./ListKeyboardDelegate-D71by0Cl.js";import"./SelectionManager-D0p45fwW.js";import"./useEvent-XFQmfvWf.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-CcV9dPLj.js";import"./useDescription-NB9RbfOu.js";import"./useControlledState-D8ynvHan.js";import"./Group-DpPRaobi.js";import"./Input-Pvttq0ZD.js";import"./Hidden-CYBwSpyF.js";import"./Button-DxB1trTe.js";import"./useLabels-DXk3hEZO.js";import"./useButton-B0tnnNP-.js";import"./useTextField-ClbrGhcC.js";import"./useField-CuzoWvdX.js";import"./TextField.module-8oYDuXgF.js";import"./Label-BI2Z-Ucb.js";import"./Dialog-wsPABYKA.js";import"./RSPContexts-1pxyigHm.js";import"./OverlayArrow-D8JuAvBO.js";import"./useResizeObserver-zpld9h65.js";import"./Collection-C9Z0fQaY.js";import"./index-CjVikPS-.js";import"./Separator-Cyhtiz1q.js";import"./PressResponder-leqBoM5k.js";import"./useLocalizedStringFormatter-CgQrWDXI.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-CR0qV5an.js";import"./Dialog-BAY92Nxk.js";import"./useLocalizedStringFormatter-vmgkQn1u.js";import"./x-CA6CIkcD.js";import"./createLucideIcon-Cw1MX5VV.js";import"./Heading-BUtHiaYH.js";import"./info-Cb-n4ApM.js";import"./Tag-qjRxlE7G.js";import"./ListBox-BplGA0sP.js";import"./DragAndDrop-C4ZB9wYE.js";import"./inertValue-8d7wwLN3.js";import"./useListState-BNdhzNdj.js";import"./useHighlightSelectionDescription-D4Vd1uns.js";import"./useUpdateEffect-DwlRX27x.js";import"./useHasTabbableChild-B7N5NAT3.js";import"./check-Br91vTRZ.js";import"./ListBoxSection-B05NP84B.js";import"./Virtualizer-CDjUGdbs.js";import"./useObserveElement-C4avBUgb.js";import"./chevron-down-Bcd_XAPn.js";import"./Button.module-BkTnSRp5.js";import"./useToggleState-DwHFcSzC.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
