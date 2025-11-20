import{j as e}from"./iframe-BCXW1_i0.js";import{$ as c}from"./Form-CaqyBj0L.js";import{G as d}from"./Grid-BEny29qu.js";import{G as i}from"./GridItem-Cu1Yp2J1.js";import{T as t}from"./TextField-BLb8j20x.js";import{S as l}from"./Select-BBy1zVqF.js";import{B as a}from"./Button-C_naedx-.js";import{R as x,a as u}from"./Radio-B6H3TnnJ.js";import{C as I}from"./CheckboxGroup-CeHqE8MM.js";import{C as G}from"./Checkbox-B_bGDc-G.js";import{L as p}from"./ListBoxItem-D8sAnDZg.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BQj-xKr5.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-CFjYe5Gf.js";import"./useFocusRing-Cbg95h9l.js";import"./index-CG2AamNc.js";import"./index-CJ47wOzG.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-CNtBlg5x.js";import"./TextField-Cy1GccX-.js";import"./FieldError-zUMBVfs0.js";import"./Text-BRLrffF_.js";import"./Text-DwKMZYPU.js";import"./RSPContexts-DUSTzirW.js";import"./Group-CoZWJLRv.js";import"./Input-BxW8ngfL.js";import"./Hidden-CDiDpivh.js";import"./Button-DY4JEqdp.js";import"./useLabels-BdTTmJ_V.js";import"./useButton-V3C9Q0iI.js";import"./useTextField-DyWXBKlN.js";import"./useControlledState-B_lkycFk.js";import"./useField-DpULJbLS.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-JI5vB7ps.js";import"./Dialog-BGozPSU8.js";import"./OverlayArrow-95mDz3t9.js";import"./useResizeObserver-DhqlsnSi.js";import"./Collection-XGMiWDNU.js";import"./index-DKlW5HAp.js";import"./Separator-DTtrVEPn.js";import"./SelectionManager-B6YMPDR8.js";import"./useEvent-BLUB4_Bw.js";import"./scrollIntoView-B_Jw_5aw.js";import"./SelectionIndicator-LDNAU2Um.js";import"./useDescription-DXlhDdlP.js";import"./ListKeyboardDelegate-FLKKQ2IO.js";import"./PressResponder-DFWjl5Vc.js";import"./useLocalizedStringFormatter-CNw7cMsH.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-BkFzyuEm.js";import"./VisuallyHidden-Ca69gFn7.js";import"./x-D8TzOJRE.js";import"./createLucideIcon-BmOKhA97.js";import"./useLocalizedStringFormatter-C1fxLZgu.js";import"./Heading-iBuxhWN6.js";import"./info-BCtl6ubQ.js";import"./Popover-TN5INWFJ.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-DptV6w1A.js";import"./DragAndDrop-BM4sj18H.js";import"./inertValue-05EgZ8xu.js";import"./useListState-BofzTIGU.js";import"./Tag-Cpkkq_fg.js";import"./useHighlightSelectionDescription-CydSFJmY.js";import"./useUpdateEffect-BPAm7CtN.js";import"./useHasTabbableChild-Bf8aBt3g.js";import"./chevron-down-CrWpuAO7.js";import"./Button.module-CtQ1deO8.js";import"./check-DkFnU7UM.js";import"./useToggleState-i7TFDGae.js";import"./Virtualizer-BXj5dskz.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
