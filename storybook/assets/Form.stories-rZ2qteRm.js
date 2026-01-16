import{j as e}from"./iframe-DwI68eck.js";import{$ as c}from"./Form-B97yB_J0.js";import{G as d}from"./Grid-W3E-7dLn.js";import{G as i}from"./GridItem-OpXBNdF7.js";import{T as t}from"./TextField-BuKb6Srt.js";import{S as l}from"./Select-92Fnrry0.js";import{B as a}from"./Button-CTJhina1.js";import{R as x,a as u}from"./Radio-BIogDgag.js";import{C as I}from"./CheckboxGroup-DWwzJsbB.js";import{C as G}from"./Checkbox-ERa32A4i.js";import{L as p}from"./ListBoxItem-D9mBxIfE.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Dw1S_uWj.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-C8z9LNZS.js";import"./useFocusRing-DB0Vn7oI.js";import"./index-DyjIQlNW.js";import"./index-DBi3ohRe.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-xdJxl_fE.js";import"./TextField-Dg8tgoz7.js";import"./FieldError-CtXLLrVt.js";import"./Text-llkKnBOG.js";import"./Text-CkP7VZx0.js";import"./RSPContexts-CBTI3P45.js";import"./Group-BcYaaqi1.js";import"./Input-ClTjxLAD.js";import"./Hidden-DPNZSM4r.js";import"./Button-Dq8sGMaF.js";import"./useLabels-DRJ0S-DI.js";import"./useButton-C5XtJKU4.js";import"./useTextField-BqGWXZj6.js";import"./useControlledState-B4AMrZHZ.js";import"./useField-CmRL5QBJ.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-Dj_J8W1G.js";import"./Dialog-DBgR96yC.js";import"./OverlayArrow-hpFbAA22.js";import"./useResizeObserver-NyppaQoy.js";import"./Collection-DRikJRb9.js";import"./index-aa6DVWL6.js";import"./Separator-DHHHnuYV.js";import"./SelectionManager--Ldx6ANV.js";import"./useEvent-De40iJ4U.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CKXp1bx9.js";import"./useDescription-B56we0Bc.js";import"./ListKeyboardDelegate-eGB28Zrm.js";import"./PressResponder-B9gPpccx.js";import"./useLocalizedStringFormatter-C-X_uo4l.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BlYtIW2E.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-DzFRqZJO.js";import"./x-mpCuSzBg.js";import"./createLucideIcon-DGN0UqC4.js";import"./useLocalizedStringFormatter-K9SYCEaj.js";import"./Heading-iMcIu53o.js";import"./info-BEwUiiBp.js";import"./Popover-DwF0j103.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-DVwAMjoO.js";import"./DragAndDrop-DdIw6-Pq.js";import"./inertValue-DXXCwMX2.js";import"./useListState-BFZkaQ1U.js";import"./Tag-dSEs6402.js";import"./useHighlightSelectionDescription-BBo-vn-2.js";import"./useUpdateEffect-BSQIs7fO.js";import"./useHasTabbableChild-DEM3rXi0.js";import"./chevron-down-DAZrT0Sc.js";import"./Button.module-Co5e5YHp.js";import"./check-KJ0NidZs.js";import"./useToggleState-CJMPhIoj.js";import"./Virtualizer-Do59WS8p.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
