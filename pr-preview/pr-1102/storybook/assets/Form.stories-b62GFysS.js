import{j as e}from"./iframe-BKt9EFfY.js";import{$ as c}from"./Form-BIn8UGe1.js";import{G as d}from"./Grid-DAKsXQSC.js";import{G as i}from"./GridItem-BBKheaja.js";import{a as x,R as u}from"./Radio-BQ94exnn.js";import{C as I}from"./CheckboxGroup-CP_EyWPa.js";import{C as G}from"./Checkbox-DG48q2BP.js";import{T as t}from"./TextField-DZw_cmEl.js";import{S as l}from"./Select-Dx7bvcHR.js";import{L as p}from"./ListBoxItem-B-f-ikSp.js";import{B as a}from"./Button-BP3_jhUy.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-UHPC9nWZ.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-Dsa57_F2.js";import"./useFocusRing-cxIDuQxL.js";import"./index--2FdksYv.js";import"./index-YDrS01VO.js";import"./clsx-Ciqy0D92.js";import"./Group-Dj1vye4d.js";import"./FieldError-x-AT8pl1.js";import"./Text-Cx5eezfb.js";import"./Text-QG4NB2hl.js";import"./Button-54WAdtvn.js";import"./Hidden-BIzqGf_Y.js";import"./useLabels-Dg5v2BlI.js";import"./useButton-DZMjZ0Xn.js";import"./SelectionIndicator-fUDz65K_.js";import"./useField-DoDrCpUl.js";import"./VisuallyHidden-oXJqa0w4.js";import"./useControlledState-BZs3lQsK.js";import"./Label-Ccv4NXgC.js";import"./Dialog-Cwu02sHs.js";import"./RSPContexts-C1Y2t1uV.js";import"./OverlayArrow-CKG8ikC0.js";import"./useResizeObserver-D-YYA0Ni.js";import"./Collection-BuYk4Gk5.js";import"./index-CcGrGtPC.js";import"./Separator-CtVyKUJH.js";import"./SelectionManager-D3YQtbVB.js";import"./useEvent-BsotznEQ.js";import"./scrollIntoView-D7dRqv7d.js";import"./useDescription-ClLBcdJg.js";import"./ListKeyboardDelegate-BEZyuz-l.js";import"./PressResponder-CJbEg2ds.js";import"./useLocalizedStringFormatter-CEsxsRDH.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-D-Skfg5M.js";import"./getScrollParent-JoXPjCTV.js";import"./x-DbaGL1T9.js";import"./createLucideIcon-CwzpYKvj.js";import"./useLocalizedStringFormatter-C4CK9KxZ.js";import"./Heading-C48sIEiR.js";import"./info-D-668lkH.js";import"./Popover-CL7jeCE7.js";import"./check-DntiIOxH.js";import"./useToggleState-4kt2hSTJ.js";import"./TextFieldBase-DEmN7Pbb.js";import"./Input-D0EQnqOR.js";import"./useTextField-BuVFyPkC.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-CCJUdaUQ.js";import"./DragAndDrop-Qs4XP6_h.js";import"./inertValue-CXVXOTrN.js";import"./useListState-d49xyLk-.js";import"./TagGroup-BWfuaM23.js";import"./useHighlightSelectionDescription-CcE0HAXh.js";import"./useUpdateEffect-BPAZNxGP.js";import"./useHasTabbableChild-mm-op1AL.js";import"./chevron-down-DfiZm_KN.js";import"./Virtualizer-D3b8iE--.js";import"./Button.module-D_C6WeTN.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
