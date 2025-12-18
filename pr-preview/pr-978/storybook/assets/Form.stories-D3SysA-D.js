import{j as e}from"./iframe-COQoy-tb.js";import{$ as c}from"./Form-CmrvpxjU.js";import{G as d}from"./Grid-DgIXeM9r.js";import{G as i}from"./GridItem-B8wNNnTg.js";import{T as t}from"./TextField-B3ysj6DB.js";import{S as l}from"./Select-BnJjccfR.js";import{B as a}from"./Button-COWVz2rh.js";import{R as x,a as u}from"./Radio-DY1Uikc4.js";import{C as I}from"./CheckboxGroup-u1lITo4W.js";import{C as G}from"./Checkbox-BnuT0fY_.js";import{L as p}from"./ListBoxItem-BSO4djMu.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-dUj1FPII.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-Dac5P0TX.js";import"./useFocusRing-KEMdm9OC.js";import"./index-D-LNSu5d.js";import"./index-Cy0cFfBq.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-CfakONcC.js";import"./TextField-CopoqudJ.js";import"./FieldError-lHGiCpDB.js";import"./Text-B03ZqDJP.js";import"./Text-C_IsDOQl.js";import"./RSPContexts-DCzfJS37.js";import"./Group-HhbW5Hrt.js";import"./Input-9NKvsT-l.js";import"./Hidden-CNwHy1Fg.js";import"./Button-6ISKDJI6.js";import"./useLabels-Dul859Iz.js";import"./useButton-C5PyE_o4.js";import"./useTextField-ikblrldl.js";import"./useControlledState-BLJZbN0w.js";import"./useField-CuZTH_zG.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-BAeCiMAa.js";import"./Dialog-BoMfLrpd.js";import"./OverlayArrow-D-16Msc0.js";import"./useResizeObserver-CINr2uq2.js";import"./Collection-DeELs6uo.js";import"./index-Ds4njVEF.js";import"./Separator-DsnV07Uk.js";import"./SelectionManager--QHTMY6o.js";import"./useEvent-CZ9ssVuG.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-U84AkFGF.js";import"./useDescription-QKLqNAEk.js";import"./ListKeyboardDelegate-zd14mAth.js";import"./PressResponder-aykRGwze.js";import"./useLocalizedStringFormatter-CW4fmwCZ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Bmp8MD13.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-Cxp4MCQV.js";import"./x-BN0kx0eU.js";import"./createLucideIcon-uFOmHGhK.js";import"./useLocalizedStringFormatter-C-ESf0SP.js";import"./Heading-DKzcd0sJ.js";import"./info-DYjCWrRJ.js";import"./Popover-C0tA_zXq.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-CQbSIxA-.js";import"./DragAndDrop-CbwL_a-7.js";import"./inertValue-Bax6Fhkq.js";import"./useListState-CLYMPs4h.js";import"./Tag-DBt8LIh7.js";import"./useHighlightSelectionDescription-w4jtJ8m6.js";import"./useUpdateEffect-BAmtRqDg.js";import"./useHasTabbableChild-CpftRryS.js";import"./chevron-down-BWVfmoLK.js";import"./Button.module-Co5e5YHp.js";import"./check-CBUmqHSH.js";import"./useToggleState-CGl8uSYJ.js";import"./Virtualizer-Bq3QsdNT.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
