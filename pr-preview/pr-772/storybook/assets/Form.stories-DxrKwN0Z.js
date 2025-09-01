import{j as n}from"./iframe-CpIPHAIU.js";import{$ as j}from"./Form-Lg2G_NNW.js";import{G}from"./Grid-BfpihhZH.js";import{G as e}from"./GridItem-CFhjRzXj.js";import{T as r}from"./TextField-DKg8PARG.js";import{S as I}from"./Select-3SLU21tc.js";import{B as a}from"./Button-DDGGPoHE.js";import{R as g,a as b}from"./Radio--vGT9csj.js";import{C as h}from"./CheckboxGroup-DFvtG0Qu.js";import{C as k}from"./Checkbox-BLQS6g9a.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-DFBwCEiC.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-LPufZjmy.js";import"./useFocusRing-DjrtWtxV.js";import"./index-3Og8xjZK.js";import"./index-DwTuLalI.js";import"./TextFieldBase-CzHOwRKQ.js";import"./TextField-DPBlmYGD.js";import"./FieldError-S5W4vrCQ.js";import"./Text-BTlNKB2Q.js";import"./Text-D7pQKzM8.js";import"./Input-D4zZMyTo.js";import"./Hidden-Dc8H1AK1.js";import"./Button-XdyfkBS7.js";import"./useLabels-DbOoN3Q2.js";import"./useButton-goGDD37W.js";import"./useTextField-Cppn1zZJ.js";import"./useControlledState-hBz71Nvk.js";import"./useField-BMWFP3tG.js";import"./TextField.module-BrIGiDQC.js";import"./Label-2l_fpTpF.js";import"./Dialog-DXcygsJ7.js";import"./RSPContexts-Dc32jnfN.js";import"./OverlayArrow-Bk3EhqgJ.js";import"./useResizeObserver-BXP5cDiT.js";import"./Collection-C_aaHZJ-.js";import"./index-CeHXzLYG.js";import"./Separator-DqfZl2f1.js";import"./SelectionManager-BTWht6u6.js";import"./useEvent-BgyDv3DN.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-D5494rFI.js";import"./useDescription-CBTeeArW.js";import"./ListKeyboardDelegate-CPMLkeYa.js";import"./PressResponder-BNuuJGSq.js";import"./useLocalizedStringFormatter-DIT8mwtd.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-BB7ESbXy.js";import"./Dialog-DbQXu36G.js";import"./useLocalizedStringFormatter-DJ81jsn5.js";import"./x-Blure7K5.js";import"./createLucideIcon-CecMBFaF.js";import"./Heading-JPu6Fgnx.js";import"./info-DHmaItDs.js";import"./Tag-CVxAwrUD.js";import"./ListBox-BBxYH_mm.js";import"./DragAndDrop-CNmwfSHj.js";import"./inertValue-L9fVhR7r.js";import"./useListState-DUQomrRW.js";import"./useHighlightSelectionDescription-CxMIBQIL.js";import"./useUpdateEffect-8DC9m0ad.js";import"./useHasTabbableChild-B-O9UPng.js";import"./check-CqGh4M0T.js";import"./ListBoxSection-BDPN7nce.js";import"./Virtualizer-Rg9t0kjR.js";import"./useObserveElement-BM5zZE5Q.js";import"./chevron-down-Ck8zGlxO.js";import"./Button.module-CF2bVDCq.js";import"./Group-CM2q4TY6.js";import"./useToggleState-CnAu_25-.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
