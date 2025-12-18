import{j as e}from"./iframe-BsLcG5dW.js";import{$ as c}from"./Form-D4UvjssS.js";import{G as d}from"./Grid-CHpfIr0E.js";import{G as i}from"./GridItem-BI_M_8Sr.js";import{T as t}from"./TextField-CCJqip25.js";import{S as l}from"./Select-Bkj7vbgX.js";import{B as a}from"./Button-B2aniDfg.js";import{R as x,a as u}from"./Radio-CuvlSs2u.js";import{C as I}from"./CheckboxGroup-D9YnaiD-.js";import{C as G}from"./Checkbox-CTtEexIh.js";import{L as p}from"./ListBoxItem-D5VZ9Sin.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-D4ybwJ5t.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-8zANhESY.js";import"./useFocusRing-CRMF4aev.js";import"./index-CzmRrwoB.js";import"./index-FzS7-Zeo.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-DOVnmrU_.js";import"./TextField-C1jLkXeC.js";import"./FieldError-5ugqjl9x.js";import"./Text-BSyI915z.js";import"./Text-DxPppo1m.js";import"./RSPContexts-hJUcswH1.js";import"./Group-BxhjRX3R.js";import"./Input-CpC47WHk.js";import"./Hidden-qLdjn3wv.js";import"./Button-BTB8VJIr.js";import"./useLabels-BR2Qh3rY.js";import"./useButton-Ba6tOTsI.js";import"./useTextField-DqC3KJ-y.js";import"./useControlledState-C4DuSNuI.js";import"./useField-BMLcCBUB.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-sFF3U46M.js";import"./Dialog-OV4kgN1K.js";import"./OverlayArrow-BE4lLXcC.js";import"./useResizeObserver-BJ3calFd.js";import"./Collection-Cx77u14n.js";import"./index-CIQSoHVc.js";import"./Separator-D_jOc6Zn.js";import"./SelectionManager-CvzC32Xt.js";import"./useEvent-aUuuXZGE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CguOllKQ.js";import"./useDescription-Bh7CB7XY.js";import"./ListKeyboardDelegate-BTIuYiNN.js";import"./PressResponder-BYT0Rh0_.js";import"./useLocalizedStringFormatter-gMpMxUKt.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Bb2V3bt4.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-_HN--CTP.js";import"./x-D-I5fcbM.js";import"./createLucideIcon-18oN6ckY.js";import"./useLocalizedStringFormatter-DPMXn8cB.js";import"./Heading-B-TWaQON.js";import"./info-YZ8kz2IS.js";import"./Popover-C-8wuYJQ.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-WjduAbwT.js";import"./DragAndDrop-CT-ZgN65.js";import"./inertValue-CgH58eMy.js";import"./useListState-0oBh0Qzm.js";import"./Tag-CzbqCK84.js";import"./useHighlightSelectionDescription-zzNbSoIf.js";import"./useUpdateEffect-zVUhLT1K.js";import"./useHasTabbableChild-B4Vx4slw.js";import"./chevron-down-DDl4n3vN.js";import"./Button.module-Co5e5YHp.js";import"./check-BgstTH0W.js";import"./useToggleState-d3OdfnGf.js";import"./Virtualizer-Cnxfb21K.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
