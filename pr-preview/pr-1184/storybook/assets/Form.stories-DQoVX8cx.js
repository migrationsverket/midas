import{j as e}from"./iframe-2N4-NX-9.js";import{c}from"./Form-CJZMhU9i.js";import{G as d}from"./Grid-CdHzkP1H.js";import{G as i}from"./GridItem-MH731F_R.js";import{a as x,R as u}from"./Radio-DRs7Rkkj.js";import{C as I}from"./CheckboxGroup-CrCJbMV7.js";import{C as G}from"./Checkbox-B5AS17d0.js";import{T as t}from"./TextField-CKm7zxOB.js";import{S as l}from"./Select-Y1aGk_VM.js";import{L as p}from"./ListBoxItem-Dq_Aie1W.js";import{B as a}from"./Button-BhHUqRPQ.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-CqNKm5um.js";import"./utils-BDyzcRVF.js";import"./clsx-B-dksMZM.js";import"./index-eEiNBmo6.js";import"./index-Boj7wyxf.js";import"./clsx-Ciqy0D92.js";import"./Group-DSrCwX2F.js";import"./FieldError-DbzXWBkQ.js";import"./Text-CG1bHrxb.js";import"./Text-C8oRKnIX.js";import"./Button-BdOK34vS.js";import"./Hidden-ByQp7cFw.js";import"./useLabel-Dt5gD5WC.js";import"./useLabels-BXMOGpY3.js";import"./useButton-DXuSSmPY.js";import"./SelectionIndicator-Cx6zjUGL.js";import"./useField-BL1xHxSq.js";import"./VisuallyHidden-BgOvzTZH.js";import"./useControlledState-CJB9gvxC.js";import"./Label-DI_SKPKu.js";import"./Dialog-zxsFuGS2.js";import"./RSPContexts-euEKx97A.js";import"./OverlayArrow-C8HxHgiy.js";import"./useResizeObserver-CUp6itZx.js";import"./Collection-jtJmnuzI.js";import"./index-C5BRSQvZ.js";import"./Separator-CrpuFQJS.js";import"./SelectionManager-n4T0I50n.js";import"./useEvent-Br-HnPPz.js";import"./scrollIntoView-7_tk7XK0.js";import"./useDescription-QUyLBt1z.js";import"./ListKeyboardDelegate-DzmftUWc.js";import"./PressResponder-B9LAUkeH.js";import"./useLocalizedStringFormatter-B22JGswt.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Fa_xDcNS.js";import"./getScrollParent-zIWWR_Mu.js";import"./x-Ceu0gGLD.js";import"./createLucideIcon-BP_ZdL8b.js";import"./useLocalizedStringFormatter-DUswzrwG.js";import"./Heading-faSUuyYq.js";import"./info-Dtcd-21w.js";import"./Popover-DA1b5ic1.js";import"./check-BThGx1wr.js";import"./useToggleState-BNXxIaXx.js";import"./TextFieldBase-BQBndOiG.js";import"./Input-jt-MUZjv.js";import"./useTextField-DHcMB_qS.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-JK493GnV.js";import"./DragAndDrop-DZ715S4r.js";import"./inertValue-d5MVVbd4.js";import"./useListState-9NVUL-Ci.js";import"./TagGroup-BkH2tVYc.js";import"./useHighlightSelectionDescription-Cn6tdgjK.js";import"./useUpdateEffect-C8hKK484.js";import"./useHasTabbableChild-TdGdqK31.js";import"./chevron-down-DZnr8iLM.js";import"./Virtualizer-CQ_22YxT.js";import"./Button.module-BB7N-cLd.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
