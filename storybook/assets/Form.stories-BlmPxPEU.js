import{j as e}from"./iframe-CjheOyM5.js";import{$ as c}from"./Form-Dyi7YPUC.js";import{G as d}from"./Grid-XE-NGnDT.js";import{G as i}from"./GridItem-B8u5--vV.js";import{a as x,R as u}from"./Radio-llDZRMvI.js";import{C as I}from"./CheckboxGroup-CV4tAYNv.js";import{C as G}from"./Checkbox-BARAQwW-.js";import{T as t}from"./TextField-Gd5I79Lc.js";import{S as l}from"./Select-BpI3_EZv.js";import{L as p}from"./ListBoxItem-q3ohK8pN.js";import{B as a}from"./Button-D6LrA16i.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-GJab0JjV.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-DkzOoVjE.js";import"./useFocusRing-BQBU-xxB.js";import"./index-BdSERe24.js";import"./index-CQFCXopn.js";import"./clsx-Ciqy0D92.js";import"./Group-Cju8ecOG.js";import"./FieldError-CtzgHxZv.js";import"./Text-CyPeEhZq.js";import"./Text-DfjK2rvS.js";import"./Button-BEfApAj7.js";import"./Hidden-fPTMSZG1.js";import"./useLabels-CB9GaZKC.js";import"./useButton-BK6j3-_O.js";import"./SelectionIndicator-B9tC7Emy.js";import"./useField-Bj94Kh8V.js";import"./VisuallyHidden-BkQsNkQj.js";import"./useControlledState-BFDK1kJU.js";import"./Label-DGMWxWTR.js";import"./Dialog-C0W_zw5U.js";import"./RSPContexts-CC-kh1Fw.js";import"./OverlayArrow-CLb6iAL6.js";import"./useResizeObserver-DoLUOYyr.js";import"./Collection-DVHiEAXj.js";import"./index-BHFPch_N.js";import"./Separator-DHaR3BJ3.js";import"./SelectionManager-C1IokEHS.js";import"./useEvent-DLgfOL5L.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-NtTCr5vC.js";import"./ListKeyboardDelegate-DMyvfGvx.js";import"./PressResponder-BX77VQQv.js";import"./useLocalizedStringFormatter-Bb6KJ9HR.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-D4TVq8pw.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-DXoGLFAv.js";import"./createLucideIcon-D7R3LjHD.js";import"./useLocalizedStringFormatter-o8VSdvfs.js";import"./Heading-BFp0CnUy.js";import"./info-C6xg0ZYn.js";import"./Popover-B_lGeLMf.js";import"./check-RzEJJvoV.js";import"./useToggleState-m3OOSc5V.js";import"./TextFieldBase-CY3xuz-K.js";import"./Input-MMfbcX2L.js";import"./useTextField-DFpwerb-.js";import"./TextField.module-Cm6797Xw.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-BMcUIWoY.js";import"./DragAndDrop-B6_cZVdv.js";import"./inertValue-Cqee1tkf.js";import"./useListState-UfbUjs_S.js";import"./Tag-ByHUOmx1.js";import"./useHighlightSelectionDescription-K8gC0YqV.js";import"./useUpdateEffect-qDcCXVZp.js";import"./useHasTabbableChild-D-BSgA4q.js";import"./chevron-down-D5Az1eiB.js";import"./Virtualizer-Z802f2gn.js";import"./Button.module-Co5e5YHp.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
          <Select label='Vilken är din favoritfrukt' placeholder='Välj en frukt' selectionMode='single' items={ITEMS.map(i => ({
          id: i,
          name: i
        }))}>
            {item => <ListBoxItem {...item}>{item.name}</ListBoxItem>}
          </Select>
        </GridItem>

        <GridItem>
          <Button>Skicka</Button>
        </GridItem>
      </Grid>;
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
            <Select label='Kön' description='Kan lämnas tomt' placeholder='Välj kön' selectionMode='single' items={ITEMS.map(i => ({
            name: i,
            id: i
          }))}>
              {item => <ListBoxItem {...item}>{item.name}</ListBoxItem>}
            </Select>
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
}`,...s.parameters?.docs?.source}}};const Le=["SimpleForm","TwoColumnForm"];export{o as SimpleForm,s as TwoColumnForm,Le as __namedExportsOrder,Xe as default};
