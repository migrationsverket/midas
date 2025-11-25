import{j as e}from"./iframe-CNQjlvDm.js";import{$ as c}from"./Form-CowfI73D.js";import{G as d}from"./Grid-B64jYHH7.js";import{G as i}from"./GridItem-B3xhetDn.js";import{T as t}from"./TextField-hJa_yvQ9.js";import{S as l}from"./Select-CzEP6-3o.js";import{B as a}from"./Button-DKj7SgkX.js";import{R as x,a as u}from"./Radio-DpGydgoj.js";import{C as I}from"./CheckboxGroup-C3X3_SZF.js";import{C as G}from"./Checkbox-95z-QO_l.js";import{L as p}from"./ListBoxItem-BNSgd_zA.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-gQ4yd-Ab.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-D93gSj4q.js";import"./useFocusRing-6KaOFFld.js";import"./index-BAocd020.js";import"./index-Crk6Oovq.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-SnFG2NBe.js";import"./TextField-BKwfXOe2.js";import"./FieldError-B77Pd3sF.js";import"./Text-CBKz5-Bc.js";import"./Text-_2-H1EYs.js";import"./RSPContexts-ZpwQ7nh7.js";import"./Group-DH-2Df9_.js";import"./Input-3C5XDWXg.js";import"./Hidden-CKgMcecd.js";import"./Button-Bq-mABfS.js";import"./useLabels-Bfeh6CAt.js";import"./useButton-C5sXC89g.js";import"./useTextField-CyQke-mJ.js";import"./useControlledState-Cw34tQo_.js";import"./useField-1JlohsQ1.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-D33bRIfp.js";import"./Dialog-B1H_-A6r.js";import"./OverlayArrow-DtDPjsf5.js";import"./useResizeObserver-pDTrh_aR.js";import"./Collection-DIjDhtq1.js";import"./index-B3BEo6A6.js";import"./Separator--1fXuolt.js";import"./SelectionManager-CNUg_EDX.js";import"./useEvent-BVIAA-zB.js";import"./scrollIntoView-GpU6uT5D.js";import"./SelectionIndicator-9b2vx5r8.js";import"./useDescription-DhRtkqqX.js";import"./ListKeyboardDelegate-BpGS_WAt.js";import"./PressResponder-FiW4JgQ7.js";import"./useLocalizedStringFormatter-BAx4OKHg.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-CSope_Cn.js";import"./VisuallyHidden-CkZ7QXN2.js";import"./x-gQKg2dFZ.js";import"./createLucideIcon-CLo-1QQP.js";import"./useLocalizedStringFormatter-CuiX0-xA.js";import"./Heading-Cc7GuOtf.js";import"./info-BBo0T8LW.js";import"./Popover-CL60AxRn.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-BGWDfUuL.js";import"./DragAndDrop-DjeWn5aO.js";import"./inertValue-yJ1gPfWO.js";import"./useListState-DIHXJ8q-.js";import"./Tag-D4HEHL87.js";import"./useHighlightSelectionDescription-B4iICd0D.js";import"./useUpdateEffect-CDfUQkk6.js";import"./useHasTabbableChild-DzCnHl11.js";import"./chevron-down-CAfnBmNf.js";import"./Button.module-CtQ1deO8.js";import"./check-DG43t2KX.js";import"./useToggleState-CoWbcUyF.js";import"./Virtualizer-D7w5M1EO.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
