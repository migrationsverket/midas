import{j as n}from"./iframe-C36llq95.js";import{$ as j}from"./Form-Bysb-SPn.js";import{G}from"./Grid-CVLJB66b.js";import{G as e}from"./GridItem-DZQqTW8V.js";import{T as r}from"./TextField-DqOz2p83.js";import{S as I}from"./Select-DcASXyKx.js";import{B as a}from"./Button-CJF9piv_.js";import{R as g,a as b}from"./Radio-DS-W8DWE.js";import{C as h}from"./CheckboxGroup-CVNLlkNE.js";import{C as k}from"./Checkbox-9xk9vLwq.js";import"./preload-helper-Dp1pzeXC.js";import"./utils--zJHB-HO.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-vUuQ-Igf.js";import"./useFocusRing-AQc39DTJ.js";import"./index-DHer5tgi.js";import"./index-CL00723S.js";import"./TextFieldBase-YhSlFLZz.js";import"./TextField-6J3-PHKB.js";import"./FieldError-uV2sCtZU.js";import"./Text-CNurQksh.js";import"./Text-BO2nG19V.js";import"./context-JuUZ_EaJ.js";import"./SelectionManager-BUXB5X9F.js";import"./useEvent-DA-Txpct.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-BgxJ3mT9.js";import"./useDescription-CGY8C0U_.js";import"./useControlledState-CK1jlZai.js";import"./Group-rU51TGlN.js";import"./Input-ZzmpH8IB.js";import"./Hidden-K6fp06nY.js";import"./Button-C51ZKMnE.js";import"./useLabels-CLEhXeMZ.js";import"./useButton-sjymwkpC.js";import"./useTextField-DbrWj1-p.js";import"./useField-Cz3bkBxI.js";import"./TextField.module-DjUItNl5.js";import"./Label-C_x1nVYY.js";import"./Dialog-_Ygltsy4.js";import"./RSPContexts-DP4NJ7Tx.js";import"./OverlayArrow-D2w0R7Oj.js";import"./useResizeObserver-BInO7fww.js";import"./Collection-C_0tfJaX.js";import"./index-DavKE8ez.js";import"./Separator-CInbyPu1.js";import"./PressResponder-8A6RK_h-.js";import"./useLocalizedStringFormatter-BYuPpD4O.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-DvelXrzy.js";import"./useLocalizedStringFormatter-D4lDf1aU.js";import"./x-C03QP1Bk.js";import"./createLucideIcon-DQjC6GOo.js";import"./Heading-Cq0XZbw1.js";import"./info-B5-_L0Dw.js";import"./Popover-BJOiBQ1N.js";import"./Tag-BpW6xbiD.js";import"./ListBox-BMPMoeGs.js";import"./DragAndDrop-C65C2Ryf.js";import"./inertValue-BPGuR0_Z.js";import"./useListState-Cr9lRX91.js";import"./useHighlightSelectionDescription-MnrSVgvv.js";import"./useUpdateEffect-PJ2XAYYr.js";import"./useHasTabbableChild-Cd5ft_pC.js";import"./check-DykBcXsQ.js";import"./ListBoxSection-DXCjgOvU.js";import"./Virtualizer-BPrGoPO9.js";import"./useObserveElement-DJiR6eF8.js";import"./chevron-down-DTIxcCJU.js";import"./Button.module-DRhvPh0f.js";import"./useToggleState-AhN63zEi.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
