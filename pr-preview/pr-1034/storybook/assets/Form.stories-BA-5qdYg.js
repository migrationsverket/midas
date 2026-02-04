import{j as e}from"./iframe-CtlzUTic.js";import{$ as c}from"./Form-UrwxiUY0.js";import{G as d}from"./Grid-DKZifp4p.js";import{G as i}from"./GridItem-CrfxaeZy.js";import{a as x,R as u}from"./Radio-BAdOacUI.js";import{C as I}from"./CheckboxGroup-CBngfS0i.js";import{C as G}from"./Checkbox-BadmrqDz.js";import{T as t}from"./TextField-Csq6zsaT.js";import{S as l}from"./Select-Ckitv7ya.js";import{L as p}from"./ListBoxItem-CP0-bZd3.js";import{B as a}from"./Button-Ki9bkVZp.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Be0LSfA6.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-CxR3xnZI.js";import"./useFocusRing-DJMLYrjC.js";import"./index-E52zMlCa.js";import"./index-5SHCtBg6.js";import"./clsx-Ciqy0D92.js";import"./Group-DSHUOC1u.js";import"./FieldError-B85O3F2_.js";import"./Text-BW699DP7.js";import"./Text-DzgVGaDU.js";import"./Button-DH5UoxLr.js";import"./Hidden-DGVzl5uY.js";import"./useLabels-BgCIJPu_.js";import"./useButton-DSvEAlkb.js";import"./SelectionIndicator-BxaIduyJ.js";import"./useField-jOtxtfA7.js";import"./VisuallyHidden-CQrctRJU.js";import"./useControlledState-CfbZjGvX.js";import"./Label-DU16NEdC.js";import"./Dialog-najdgrHS.js";import"./RSPContexts-CQZGhvKo.js";import"./OverlayArrow-BoJEOXyb.js";import"./useResizeObserver-Dk7hpC7i.js";import"./Collection-ZWhUlmEB.js";import"./index-BxlIXLxQ.js";import"./Separator-BJjEPYu_.js";import"./SelectionManager-CbX-eWig.js";import"./useEvent-7Vlz65b-.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-DnlIBvPV.js";import"./ListKeyboardDelegate-lZINxfqG.js";import"./PressResponder-i5r1OmEb.js";import"./useLocalizedStringFormatter-C0z3Bv7k.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DCFHBOij.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-DPwbIeop.js";import"./createLucideIcon-DLRJv2UH.js";import"./useLocalizedStringFormatter-eyJdwfwF.js";import"./Heading-wObVOJxK.js";import"./info-B4bUa8f0.js";import"./Popover-BPMUKrH2.js";import"./check-CZnb4MBd.js";import"./useToggleState-Cm7ngC4r.js";import"./TextFieldBase--Sbuk8Q5.js";import"./TextField-C80CR2Ko.js";import"./Input-DrsMrdpe.js";import"./useTextField-DOKiG94a.js";import"./TextField.module-DpzeWGpt.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-b0-DWvgF.js";import"./DragAndDrop-BteJbP7d.js";import"./inertValue-BqIVJqax.js";import"./useListState-Bm65V5lD.js";import"./Tag-DxGkgetu.js";import"./useHighlightSelectionDescription-BuB7GsrO.js";import"./useUpdateEffect-CkPJ9kZ3.js";import"./useHasTabbableChild-C0-hRaav.js";import"./chevron-down-CEOWIXmF.js";import"./Virtualizer-Cke3e40L.js";import"./Button.module-Co5e5YHp.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
