import{j as e}from"./iframe-8LQjSoV-.js";import{$ as c}from"./Form-DD9j93NI.js";import{G as d}from"./Grid-CI7gVfei.js";import{G as i}from"./GridItem-DIulq1Zw.js";import{a as x,R as u}from"./Radio-BnYdi9PL.js";import{C as I}from"./CheckboxGroup-qJ7KbwLj.js";import{C as G}from"./Checkbox-Dc7WO4QR.js";import{T as t}from"./TextField-CtHkaTks.js";import{S as l}from"./Select-DhB5rX60.js";import{L as p}from"./ListBoxItem-B1OZShYj.js";import{B as a}from"./Button-BHfZAxDJ.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-D4ezzWJc.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-CZUIQIsK.js";import"./useFocusRing-eCeeo32D.js";import"./index-CSLiAA3d.js";import"./index-Bp415QC6.js";import"./clsx-Ciqy0D92.js";import"./Group-D7brk9Pt.js";import"./FieldError-ZO43sKQE.js";import"./Text-Ba5DRcdW.js";import"./Text-B7DoZjLQ.js";import"./Button-B1ovmxx6.js";import"./Hidden-DMawGuP2.js";import"./useLabels-D4_n4kmh.js";import"./useButton-V0hMWo2E.js";import"./SelectionIndicator-B4ysFdBZ.js";import"./useField-Bj5nGtmw.js";import"./VisuallyHidden-CKIzJ5lj.js";import"./useControlledState-BRRCr0-V.js";import"./Label-Dmk_nyub.js";import"./Dialog-D_ik0V2q.js";import"./RSPContexts-C9qIP2XU.js";import"./OverlayArrow-CFLAg81B.js";import"./useResizeObserver-BDH1aAVt.js";import"./Collection-CKtooNbR.js";import"./index-CvYpyXd6.js";import"./Separator-BgXH_ZB5.js";import"./SelectionManager-zJgynfyK.js";import"./useEvent-Ba0ZD0JM.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-DXvHmld6.js";import"./ListKeyboardDelegate-BJ1_VC6C.js";import"./PressResponder-B4KwkXPh.js";import"./useLocalizedStringFormatter-C8C_oBkV.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BhPqfReP.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-Cllv4JrD.js";import"./createLucideIcon-DK8ikGDs.js";import"./useLocalizedStringFormatter-CEJaTWWg.js";import"./Heading-BEuxFqUj.js";import"./info-DKO4MRV3.js";import"./Popover-B8UBIi6G.js";import"./check-DV3Qs5v4.js";import"./useToggleState-CgOs4O_l.js";import"./TextFieldBase-CbzYKTK0.js";import"./TextField-BSLnHcRW.js";import"./Input-CNxvOAnP.js";import"./useTextField-DLgBnWvT.js";import"./TextField.module-DpzeWGpt.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-C-HdHZE5.js";import"./DragAndDrop-BZrPYmpc.js";import"./inertValue-CXnhF55Q.js";import"./useListState-CBlflbm8.js";import"./Tag-DHdfq-co.js";import"./useHighlightSelectionDescription-DAsb9sT7.js";import"./useUpdateEffect-YjnK7sZh.js";import"./useHasTabbableChild-CMsKcrbr.js";import"./chevron-down-DOJn8rYi.js";import"./Virtualizer-DKviqzjL.js";import"./Button.module-Co5e5YHp.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
