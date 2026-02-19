import{j as e}from"./iframe-C3suvfCC.js";import{$ as c}from"./Form-Bl2LrB3d.js";import{G as d}from"./Grid-uoz0I6mb.js";import{G as i}from"./GridItem-D36B3NYe.js";import{a as x,R as u}from"./Radio-BtGzOJeg.js";import{C as I}from"./CheckboxGroup-BcnDcJfT.js";import{C as G}from"./Checkbox-i3lDb0Ip.js";import{T as t}from"./TextField-Dvoe8oNI.js";import{S as l}from"./Select-DClTa_du.js";import{L as p}from"./ListBoxItem-KoYsv8vt.js";import{B as a}from"./Button-BugZSa53.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-8KtKGWo2.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-D3u9G5Gr.js";import"./useFocusRing-DPPVEX-G.js";import"./index-DPEO0aoj.js";import"./index-PxyQfFNQ.js";import"./clsx-Ciqy0D92.js";import"./Group-w1wqq_Bv.js";import"./FieldError-r_7UR8Ic.js";import"./Text-TmrZTkdZ.js";import"./Text-CAR9w4j8.js";import"./Button-Dadovnzr.js";import"./Hidden-B4jqCieW.js";import"./number-DfkVkf0F.js";import"./useLabels-ETQjh8K0.js";import"./useButton-D1gxBCXz.js";import"./SelectionIndicator-3UAsTNPC.js";import"./useField-DCRcz9cn.js";import"./VisuallyHidden-BuDGIcKc.js";import"./useControlledState-Dy1nnS07.js";import"./Label-BxjybePx.js";import"./Dialog-DK8TlEY6.js";import"./RSPContexts-D9aNL0uK.js";import"./OverlayArrow-CLt_sQuq.js";import"./useResizeObserver-VclQBWcI.js";import"./Collection-CQ04hqGX.js";import"./index-R_sykBLn.js";import"./Separator-DMXJbRzd.js";import"./SelectionManager-sa4l8pM_.js";import"./useEvent-C45D4JfQ.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-Dzu4Oy5P.js";import"./ListKeyboardDelegate-8ZhAfhP0.js";import"./PressResponder-YbpO_Git.js";import"./useLocalizedStringFormatter-BhJ_7gEa.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Bo_RTDbl.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-Z98Hm-Qw.js";import"./createLucideIcon-lIWmNTi7.js";import"./useLocalizedStringFormatter-B21-jb3s.js";import"./Heading-BUZwhMm1.js";import"./info-SU5iTE0p.js";import"./Popover-dtyRgXv8.js";import"./check-DCe7pga7.js";import"./useToggleState-Bva72Ife.js";import"./TextFieldBase-CFL2qvUh.js";import"./Input-4m9oJ9Sw.js";import"./useTextField-SIPUAUV3.js";import"./TextField.module-Dhscz2t0.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-o6ILxDw9.js";import"./DragAndDrop-CIaLUjcZ.js";import"./inertValue-DdnXXh8S.js";import"./useListState-CiFapv0w.js";import"./TagGroup-CSZsaP5E.js";import"./useHighlightSelectionDescription-Cg167jHJ.js";import"./useUpdateEffect-D3I_akV7.js";import"./useHasTabbableChild-DzyrEw0f.js";import"./chevron-down-B6J15lFV.js";import"./Virtualizer-RKZBdvBy.js";import"./Button.module-Co5e5YHp.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
