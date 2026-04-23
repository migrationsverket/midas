import{j as e}from"./iframe-9FvbyuW0.js";import{c}from"./Form-CxEXbquf.js";import{G as d}from"./Grid-4s_s9TNU.js";import{G as i}from"./GridItem-hb_Yl9op.js";import{a as x,R as u}from"./Radio-DeM8GAaQ.js";import{C as I}from"./CheckboxGroup-vmsZcozq.js";import{C as G}from"./Checkbox-oDxWrAhJ.js";import{T as t}from"./TextField-JlyfSRCY.js";import{S as l}from"./Select-CXbLQHjo.js";import{L as p}from"./ListBoxItem-T5vByTjL.js";import{B as a}from"./Button-2CN5Xnme.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-Vad-IAyW.js";import"./utils-DbV0Y6c3.js";import"./clsx-B-dksMZM.js";import"./index-C9gp0U3l.js";import"./index-D8SBrWSp.js";import"./clsx-Ciqy0D92.js";import"./Group-BTtkthVR.js";import"./FieldError-DXeE9aRb.js";import"./Text-DiUsHtEy.js";import"./Text-rctLJTJW.js";import"./Button-C6F5UViI.js";import"./Hidden-DVuO0yGr.js";import"./useLabel-CJC3f4ic.js";import"./useLabels-oVESIWAy.js";import"./useButton-DveN6vhz.js";import"./SelectionIndicator-CSw75rQk.js";import"./useField-BA20b1Lr.js";import"./VisuallyHidden-C2w5ZOiK.js";import"./useControlledState-DTpS52De.js";import"./Label-BCnHYHUz.js";import"./Dialog-DpcokjtD.js";import"./RSPContexts--6FiGTU6.js";import"./OverlayArrow-DLBSeoRI.js";import"./useResizeObserver-BPk5j--a.js";import"./Collection-jHqWKKLK.js";import"./index-CygLUfk4.js";import"./Separator-BjFOZDkA.js";import"./SelectionManager-Bi6U6zzO.js";import"./useEvent-CbyPD6wK.js";import"./scrollIntoView-Cg5eRwi4.js";import"./useDescription-BGTuXDEN.js";import"./ListKeyboardDelegate-CMUv_TXp.js";import"./PressResponder-DGAC22GT.js";import"./useLocalizedStringFormatter-4mf_lvzF.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CPdj6FLI.js";import"./getScrollParent-L3WWZsSI.js";import"./ModalOverlay-DGTRQLvx.js";import"./x-DkE65F2h.js";import"./createLucideIcon-BM_MsqvO.js";import"./useLocalizedStringFormatter-V_sqhmlZ.js";import"./Heading-CQ5wBLPw.js";import"./info-BgeEpHk4.js";import"./Popover-DvoNYVBo.js";import"./check-DX3HpAMu.js";import"./useToggleState-D7efnJJC.js";import"./TextFieldBase-CJnhJpDc.js";import"./Input-bNYEqfXu.js";import"./useTextField-CDf8M08J.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-BXq_VK-T.js";import"./DragAndDrop-WMLNebka.js";import"./inertValue-C6WkDcKr.js";import"./useListState-CgwZgjIk.js";import"./TagGroup-BNHIqSpR.js";import"./useHighlightSelectionDescription-CYXPGFYw.js";import"./useUpdateEffect-_5lb3g9b.js";import"./useHasTabbableChild-BisM9xla.js";import"./chevron-down-C-Dd2_JE.js";import"./Virtualizer-B4h2tJn2.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
