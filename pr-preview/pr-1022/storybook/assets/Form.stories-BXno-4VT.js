import{j as e}from"./iframe-D-t8l-nQ.js";import{$ as c}from"./Form-B3WM99l_.js";import{G as d}from"./Grid-DJzfZ8Jw.js";import{G as i}from"./GridItem-BeRhWNl6.js";import{T as t}from"./TextField-IkO8KvcY.js";import{S as l}from"./Select-sdR63fRg.js";import{B as a}from"./Button-CHG0rl3V.js";import{R as x,a as u}from"./Radio-BFsXlpw0.js";import{C as I}from"./CheckboxGroup-BsxZKrzw.js";import{C as G}from"./Checkbox-CxjOqhUF.js";import{L as p}from"./ListBoxItem-CiGNhPnC.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-C09TX1Ea.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-Bh4BmBOT.js";import"./useFocusRing-CR_o_Q9s.js";import"./index-BdqC0PhN.js";import"./index-csafQpnv.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-DBL_hrZI.js";import"./TextField-lCihfSl8.js";import"./FieldError-Nn4mt1Aj.js";import"./Text-CG0yYSyZ.js";import"./Text-D8XkFvPl.js";import"./RSPContexts-Bjm4deda.js";import"./Group-D1BkClNz.js";import"./Input-DWI-UTXe.js";import"./Hidden-8h6Lngiq.js";import"./Button-Bv6XbooR.js";import"./useLabels-BDhfzl9l.js";import"./useButton-ucD7gpk8.js";import"./useTextField-FxkGREDl.js";import"./useControlledState-D_vJ43oY.js";import"./useField-C1D7xTDh.js";import"./TextField.module-1fNSVGjT.js";import"./Label-CYCA0m5-.js";import"./Dialog-rO0zha-c.js";import"./OverlayArrow-CeTGPrJX.js";import"./useResizeObserver-CeMaA03n.js";import"./Collection-BJ_XawYo.js";import"./index-EviCI9Dk.js";import"./Separator-SNTykIrS.js";import"./SelectionManager-K7oo-nKh.js";import"./useEvent-D7sZf_Zj.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-C-3v6jXm.js";import"./useDescription-DnttFM8m.js";import"./ListKeyboardDelegate-DegdBO48.js";import"./PressResponder-CeZ_li-q.js";import"./useLocalizedStringFormatter-Dt4C4rmW.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DPd47qqH.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-CznJ6A2t.js";import"./x-D0A6-I5y.js";import"./createLucideIcon-CI-4TPo-.js";import"./useLocalizedStringFormatter-BmdgiejR.js";import"./Heading-BwMOfTtT.js";import"./info-D8EAVG3X.js";import"./Popover-Ckh16Jlm.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-AD9EI_Cg.js";import"./DragAndDrop-CZEhJMcV.js";import"./inertValue-gEabz47x.js";import"./useListState-Coh8SlTV.js";import"./Tag-BbmY17mI.js";import"./useHighlightSelectionDescription-B9fCgYsQ.js";import"./useUpdateEffect-DSOd12sn.js";import"./useHasTabbableChild-B6kfidcD.js";import"./chevron-down-RizvY_QI.js";import"./Button.module-Co5e5YHp.js";import"./check-DeGdF_Nq.js";import"./useToggleState-CSo1bWyu.js";import"./Virtualizer-0M0Z1nvp.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
