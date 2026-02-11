import{j as e}from"./iframe-BrSFSEso.js";import{$ as c}from"./Form-DcVXVRUN.js";import{G as d}from"./Grid-BhQwCdZM.js";import{G as i}from"./GridItem-Be9OrmMK.js";import{a as x,R as u}from"./Radio-DiTS5cN5.js";import{C as I}from"./CheckboxGroup-BeD1oNXS.js";import{C as G}from"./Checkbox-Bqk_h2hx.js";import{T as t}from"./TextField-ByPbIbFK.js";import{S as l}from"./Select-jZXuVymp.js";import{L as p}from"./ListBoxItem-BGuKqqHp.js";import{B as a}from"./Button-D56CPdXD.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CSLr47GB.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-DYc4Vusd.js";import"./useFocusRing-B7OMZUkL.js";import"./index-Bwu9F9er.js";import"./index-ze5CMu77.js";import"./clsx-Ciqy0D92.js";import"./Group-ggQdBBag.js";import"./FieldError-C1wT0W68.js";import"./Text-CqAiKc3c.js";import"./Text-afjM-cTG.js";import"./Button-sstewYaM.js";import"./Hidden-bRkw9FY4.js";import"./number-DfkVkf0F.js";import"./useLabels-BrFMbAmC.js";import"./useButton-B52JHo7m.js";import"./SelectionIndicator-DsPVl8Wi.js";import"./useField-BUD6g1mX.js";import"./VisuallyHidden-ClNUZpiZ.js";import"./useControlledState-CqGR6b7a.js";import"./Label-BwjNgHnq.js";import"./Dialog-GDy5bWq5.js";import"./RSPContexts-D6LnjnjF.js";import"./OverlayArrow-S-wF1zMs.js";import"./useResizeObserver-C-3K1Yg-.js";import"./Collection-gPtAIt1S.js";import"./index-AqybnyRZ.js";import"./Separator-btKLgu5F.js";import"./SelectionManager-B_55B_zK.js";import"./useEvent-Bnvwx3ca.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-CgGPIItB.js";import"./ListKeyboardDelegate-CCJ1QruW.js";import"./PressResponder-Cw8JUUw4.js";import"./useLocalizedStringFormatter-CutqbN-G.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-C2q38RaJ.js";import"./getScrollParent-Cpn7MDkE.js";import"./Modal-BBpNHHOc.js";import"./x-DQ48cbAb.js";import"./createLucideIcon-D7YZh2ey.js";import"./useLocalizedStringFormatter-CKLO5enn.js";import"./Heading-BO2ZHWnX.js";import"./info-D9QMLE3p.js";import"./Popover-C4JN4Q0f.js";import"./check-BaEfTwup.js";import"./useToggleState-BX32HchL.js";import"./TextFieldBase-CXmUNkfY.js";import"./TextField-DO2djXGD.js";import"./Input-kjJsHDHI.js";import"./useTextField-BpM0-sgz.js";import"./TextField.module-DpzeWGpt.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-CMNO1xfw.js";import"./DragAndDrop-Bgc8lVW4.js";import"./inertValue-zXl0koWC.js";import"./useListState-B1jl8rEV.js";import"./Tag-BUxR4yL5.js";import"./useHighlightSelectionDescription-Ckkpcs12.js";import"./useUpdateEffect-DGwGMGOq.js";import"./useHasTabbableChild-Cj1tWk7l.js";import"./chevron-down-BY79sv5H.js";import"./Virtualizer-Vi3vDhyq.js";import"./Button.module-Co5e5YHp.js";const Ke={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Oe=["SimpleForm","TwoColumnForm"];export{o as SimpleForm,s as TwoColumnForm,Oe as __namedExportsOrder,Ke as default};
