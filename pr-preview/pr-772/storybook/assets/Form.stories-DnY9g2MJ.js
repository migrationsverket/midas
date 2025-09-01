import{j as n}from"./iframe-DnFUXazR.js";import{$ as j}from"./Form-CIkufACr.js";import{G}from"./Grid-C2klMRYF.js";import{G as e}from"./GridItem-EYZHVuIm.js";import{T as r}from"./TextField-l_TIbi1F.js";import{S as I}from"./Select-DuUjDXQ_.js";import{B as a}from"./Button-Bl8VN_bh.js";import{R as g,a as b}from"./Radio-D49m6C14.js";import{C as h}from"./CheckboxGroup-CKFJL1F8.js";import{C as k}from"./Checkbox-DBB1O-NA.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-CvOFn_nw.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-Dfb79KAt.js";import"./useFocusRing-Bz1RIfvA.js";import"./index-DvyQgsud.js";import"./index-BH52xZJ7.js";import"./TextFieldBase-Kj4KXzJ7.js";import"./TextField-Dc0Pnbn9.js";import"./FieldError-vY7leOoW.js";import"./Text-BfPzhcz1.js";import"./Text-BeptE7na.js";import"./ListKeyboardDelegate-gGbZMPh5.js";import"./SelectionManager-DATJEhG2.js";import"./useEvent-BbsPSmrp.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-CQIq77E7.js";import"./useDescription-CpW3tJ7E.js";import"./useControlledState-NCm5u2kK.js";import"./Group-7ya4DCiR.js";import"./Input-Du14ZtTZ.js";import"./Hidden-DHcBwEpO.js";import"./Button-CD5AdjcW.js";import"./useLabels-DlA5dmtY.js";import"./useButton-Cvd6TDcz.js";import"./useTextField-Cz9FeUKI.js";import"./useField-CULfd8M_.js";import"./TextField.module-BrIGiDQC.js";import"./Label-CHK-F2U2.js";import"./Dialog-8I0rjBQt.js";import"./RSPContexts-mMo5q4_4.js";import"./OverlayArrow-cxGJDcet.js";import"./useResizeObserver-BEuyOMsI.js";import"./Collection-D85bJOHz.js";import"./index-nFXpVjlf.js";import"./Separator-DpNeZgj5.js";import"./PressResponder-ui3wMPWa.js";import"./useLocalizedStringFormatter-Dj5bn3vT.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-BxZFB-rN.js";import"./Dialog-B7N9F8wb.js";import"./useLocalizedStringFormatter-D1Fn1HIn.js";import"./x-8swxvg4y.js";import"./createLucideIcon-BdC831nq.js";import"./Heading-Ck3-CSlO.js";import"./info-VAZNljdq.js";import"./Tag-DiYErljw.js";import"./ListBox-BoYddC77.js";import"./DragAndDrop-BzUHrOIW.js";import"./inertValue-men6yYdq.js";import"./useListState-CycwDzjJ.js";import"./useHighlightSelectionDescription-BrR5VHaJ.js";import"./useUpdateEffect-tb_ETv8K.js";import"./useHasTabbableChild-DI36XMBS.js";import"./check-CeqQmvPs.js";import"./ListBoxSection-B5Ww2Iuu.js";import"./Virtualizer-BCPNbvnC.js";import"./useObserveElement-BoENRE7j.js";import"./chevron-down-BBh_-tBn.js";import"./Button.module-CF2bVDCq.js";import"./useToggleState-CqXdVw_b.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
