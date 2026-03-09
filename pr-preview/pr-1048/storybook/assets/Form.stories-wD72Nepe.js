import{j as e}from"./iframe-C7bjyZwM.js";import{$ as c}from"./Form-v5sUP_bv.js";import{G as d}from"./Grid-BZEcMDV4.js";import{G as i}from"./GridItem-Dmi_cEI9.js";import{a as x,R as u}from"./Radio-CFzDi-Gl.js";import{C as I}from"./CheckboxGroup-BY3zFBJx.js";import{C as G}from"./Checkbox-CpTlznKz.js";import{T as t}from"./TextField-Dzss_4Ge.js";import{S as l}from"./Select-DyyY6DdD.js";import{L as p}from"./ListBoxItem-XuU99VaP.js";import{B as a}from"./Button-B0ce8tXc.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CIiQPwyX.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-BWm46lJU.js";import"./useFocusRing-5twuRh50.js";import"./index-BcQ7-9aJ.js";import"./index-Dy0iqIGJ.js";import"./clsx-Ciqy0D92.js";import"./Group-BFk5EyV3.js";import"./FieldError-BXfQY4zD.js";import"./Text-BJaGdqWL.js";import"./Text-C5NeNGM2.js";import"./Button-C2JLJi6L.js";import"./Hidden-aFyf7gu8.js";import"./useLabels-B0ZdbmeW.js";import"./useButton-JOi2-Sum.js";import"./SelectionIndicator-Stz9YuR-.js";import"./useField-CpAfE4lc.js";import"./VisuallyHidden-B7bbQpVf.js";import"./useControlledState-D62BjFgf.js";import"./Label-kCS0HhbY.js";import"./Dialog-Cz3ZB9H5.js";import"./RSPContexts-CnvL7WZL.js";import"./OverlayArrow-B3YLf9Fa.js";import"./useResizeObserver-ezTdfubf.js";import"./Collection-6KqJKeYy.js";import"./index-BSvAKKIw.js";import"./Separator-xCvxJZHm.js";import"./SelectionManager-CvqFuJtb.js";import"./useEvent-B8VlZ3mC.js";import"./scrollIntoView-BhIbPiYG.js";import"./useDescription-CweaZgNC.js";import"./ListKeyboardDelegate-C5T3FD_h.js";import"./PressResponder-jUlRYh37.js";import"./useLocalizedStringFormatter-BA72XhLM.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DpAp9bcE.js";import"./getScrollParent-BeyReYlz.js";import"./x-nSKEkmzv.js";import"./createLucideIcon-C5pih5R6.js";import"./useLocalizedStringFormatter-CRvjyLqR.js";import"./Heading-CT2NG_Xd.js";import"./info-BV12xQAQ.js";import"./Popover-P9PcVLxb.js";import"./check-mAf0TnwR.js";import"./useToggleState-BkLJVd_d.js";import"./TextFieldBase-BP3MTOYo.js";import"./Input-B1cDLkhA.js";import"./useTextField-DxO_Ht67.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-CEZeF9hv.js";import"./DragAndDrop-xM5wExo7.js";import"./inertValue-D2BfLwqb.js";import"./useListState-DZqpOaAC.js";import"./TagGroup-BkjkM-IM.js";import"./useHighlightSelectionDescription-Bks8e2Qy.js";import"./useUpdateEffect-CRPY8_S0.js";import"./useHasTabbableChild-9POUsjQy.js";import"./chevron-down-BFNpM2Ih.js";import"./Virtualizer-DRnSNTuh.js";import"./Button.module-D_C6WeTN.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
