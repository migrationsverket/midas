import{j as e}from"./iframe-Bs8KTy6C.js";import{$ as c}from"./Form-KKn6Lh2V.js";import{G as d}from"./Grid-CjjQUfbk.js";import{G as i}from"./GridItem-B4CSpRUT.js";import{a as x,R as u}from"./Radio-NJxZ10mL.js";import{C as I}from"./CheckboxGroup-Dh3e0xV_.js";import{C as G}from"./Checkbox-8aUQszfa.js";import{T as t}from"./TextField-jToee8MG.js";import{S as l}from"./Select-BBCKWa5p.js";import{L as p}from"./ListBoxItem-dZ5K58_I.js";import{B as a}from"./Button-hEmbppXg.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-7Wht2g-Y.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-knURiIi0.js";import"./useFocusRing-Bd7pCjc-.js";import"./index-BLVDJhlR.js";import"./index-Bwa-TvpD.js";import"./clsx-Ciqy0D92.js";import"./Group--RXBMCou.js";import"./FieldError-C99gwkco.js";import"./Text-Is5sK9kM.js";import"./Text-BoHNsdRj.js";import"./Button-CxAHhwgQ.js";import"./Hidden-BrvGFfZa.js";import"./useLabels-BzecgFkb.js";import"./useButton-31Glm75G.js";import"./SelectionIndicator-Cxkz7MSn.js";import"./useField-Ccklh0cv.js";import"./VisuallyHidden-BBTIfzW0.js";import"./useControlledState-6XUuECgK.js";import"./Label-CJ6V0bgk.js";import"./Dialog-SKg3OPGS.js";import"./RSPContexts-Cn0wIx3g.js";import"./OverlayArrow-DHI9hthx.js";import"./useResizeObserver-Dn32OBqP.js";import"./Collection--YMenRmj.js";import"./index-D9oWzMTR.js";import"./Separator-f7sMysnx.js";import"./SelectionManager-BpOfB2LQ.js";import"./useEvent-5ZwgKb7q.js";import"./scrollIntoView-BBlkQq5K.js";import"./useDescription-B2R3OifQ.js";import"./ListKeyboardDelegate-BVzuzsm6.js";import"./PressResponder-dS2wrVHY.js";import"./useLocalizedStringFormatter-BppNrsBp.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-1oST7N2-.js";import"./getScrollParent-CPUsdWMS.js";import"./x-DmyzL7jy.js";import"./createLucideIcon-TcTXJfKq.js";import"./useLocalizedStringFormatter-CT_aTZ4z.js";import"./Heading-BZGNUUY1.js";import"./info-CEBu5sf2.js";import"./Popover-DIMUMzwb.js";import"./check-DsGwW2u8.js";import"./useToggleState-SEglJwmJ.js";import"./TextFieldBase--GIrCs0J.js";import"./Input-Cj5pKMLH.js";import"./useTextField-DrruEHXD.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-BHmbVcgN.js";import"./DragAndDrop-BtMKC_MV.js";import"./inertValue-kh_5pWvL.js";import"./useListState-Dwx2Z0x9.js";import"./TagGroup-CoT6SsWC.js";import"./useHighlightSelectionDescription-C7A0sWDz.js";import"./useUpdateEffect-CqkCkNkC.js";import"./useHasTabbableChild-CJPHdFI5.js";import"./chevron-down-CrYBxpkk.js";import"./Virtualizer-CO5hJzNE.js";import"./Button.module-D_C6WeTN.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
