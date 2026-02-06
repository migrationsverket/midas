import{j as e}from"./iframe-uZkJ1fJG.js";import{$ as c}from"./Form-BNWWFyYj.js";import{G as d}from"./Grid-CGTvhGSk.js";import{G as i}from"./GridItem-g7mQ_5Gi.js";import{a as x,R as u}from"./Radio-a9KbzL9G.js";import{C as I}from"./CheckboxGroup-BwwHzknF.js";import{C as G}from"./Checkbox-CSkRDfz4.js";import{T as t}from"./TextField-zIIq45Mo.js";import{S as l}from"./Select-DXU1Ylm3.js";import{L as p}from"./ListBoxItem-ciFyTv3W.js";import{B as a}from"./Button-DXAvfZt_.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Bql2fpyW.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-D37evYkq.js";import"./useFocusRing-DaTXuR1t.js";import"./index-n8hdgtys.js";import"./index-B9xkxF8M.js";import"./clsx-Ciqy0D92.js";import"./Group-D3DUoZok.js";import"./FieldError-CNz8C0Mw.js";import"./Text-ClpReuqT.js";import"./Text-D4eTnBnq.js";import"./Button-wtboOTdT.js";import"./Hidden-D9iAREQW.js";import"./useLabels-C8qvnydK.js";import"./useButton-B1lGnkCE.js";import"./SelectionIndicator-CWeNhkgP.js";import"./useField-NLOOn1cb.js";import"./VisuallyHidden-CZMMqkul.js";import"./useControlledState-Cr8mehV-.js";import"./Label-j0JcQGBk.js";import"./Dialog-CgGwA0YS.js";import"./RSPContexts-DFcqcjFx.js";import"./OverlayArrow-C-RLbmOu.js";import"./useResizeObserver-D-kAN7jW.js";import"./Collection-Cc352SrR.js";import"./index-iUw-gvy4.js";import"./Separator-COBfszN5.js";import"./SelectionManager-aHBXooaK.js";import"./useEvent-BrJvnBOp.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-BpjeHAcD.js";import"./ListKeyboardDelegate-CJBMhtBR.js";import"./PressResponder-DrB52dBR.js";import"./useLocalizedStringFormatter-BmHqoQ62.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-IaxLghhU.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-7qMG5WbC.js";import"./createLucideIcon-DACNTlAl.js";import"./useLocalizedStringFormatter-CxCN2hvr.js";import"./Heading-JN5bR88e.js";import"./info-BylgOWnt.js";import"./Popover-BccHq3q6.js";import"./check-C9yMFlvN.js";import"./useToggleState-BCbGSezm.js";import"./TextFieldBase-CyTKfkon.js";import"./TextField-BxCauLAl.js";import"./Input-DpVxtRNs.js";import"./useTextField-bl1JDDeB.js";import"./TextField.module-DpzeWGpt.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-G6FW-YnS.js";import"./DragAndDrop-CtWLhPR3.js";import"./inertValue-DlE8wqgE.js";import"./useListState-B3De7vu9.js";import"./Tag-CdGKewnc.js";import"./useHighlightSelectionDescription-Cksk7ZI-.js";import"./useUpdateEffect-BYaQzIvu.js";import"./useHasTabbableChild-BWuuKN93.js";import"./chevron-down-60Odal5w.js";import"./Virtualizer-EDpnTHWk.js";import"./Button.module-Co5e5YHp.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const ye=["SimpleForm","TwoColumnForm"];export{o as SimpleForm,s as TwoColumnForm,ye as __namedExportsOrder,Le as default};
