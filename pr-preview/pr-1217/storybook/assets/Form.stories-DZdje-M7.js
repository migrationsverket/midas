import{j as e}from"./iframe-DG8sLAOy.js";import{c}from"./Form-DJ7nF5qY.js";import{G as d}from"./Grid-DsDV0ycF.js";import{G as i}from"./GridItem-CiSpsPJG.js";import{a as x,R as u}from"./Radio-BLJyCcCm.js";import{C as I}from"./CheckboxGroup-CeY8j2UB.js";import{C as G}from"./Checkbox-B7G0NvAw.js";import{T as t}from"./TextField-DrS0GAe3.js";import{S as l}from"./Select-C-vThhVC.js";import{L as p}from"./ListBoxItem-wMmt1Vx4.js";import{B as a}from"./Button-D1u3zQ32.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-mNkvIRfY.js";import"./utils-DLAFhier.js";import"./clsx-B-dksMZM.js";import"./index-Bi8SYFrz.js";import"./index-3oKnAMqx.js";import"./clsx-Ciqy0D92.js";import"./Group-CI_3ak_E.js";import"./FieldError-DWs4hNvn.js";import"./Text-BL7Sfi9Q.js";import"./Text-BnRQmBDY.js";import"./Button-e9hh4zze.js";import"./Hidden-BYn-neub.js";import"./useLabel-BpCu8-Ci.js";import"./useLabels-DGk43mCP.js";import"./useButton-CwsfUSJL.js";import"./SelectionIndicator-DS6X-NPe.js";import"./useField-FnGI4Iq2.js";import"./VisuallyHidden-CYqYwLo_.js";import"./useControlledState-RiscT5mJ.js";import"./Label-DxHZz_sD.js";import"./Dialog-Cjs26p5J.js";import"./RSPContexts-CMJFVu7E.js";import"./OverlayArrow-CBGpz9F8.js";import"./useResizeObserver-CsSuGL_W.js";import"./Collection-DfpZ8qtz.js";import"./index-Oda9nsrN.js";import"./Separator-CNus_F-X.js";import"./SelectionManager-BfKQiKi4.js";import"./useEvent-VtbUIOmB.js";import"./scrollIntoView-DA1Ufw7z.js";import"./useDescription-CvEQI5cY.js";import"./ListKeyboardDelegate-CxhQww-5.js";import"./PressResponder-CHij106b.js";import"./useLocalizedStringFormatter-BhEtSmKp.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-X3MQfTqk.js";import"./getScrollParent-BX7WBRu0.js";import"./Modal-BhNUo4lb.js";import"./x-BslDqAEV.js";import"./createLucideIcon-CiRaq98A.js";import"./useLocalizedStringFormatter-Bm9KZk9G.js";import"./Heading-DXcU2JCi.js";import"./info-CBmcZufD.js";import"./Popover-D3OJZ6Lc.js";import"./check-BcoezpGd.js";import"./useToggleState-DRNV_nZF.js";import"./TextFieldBase-DxqCILv6.js";import"./Input-DLI75ww7.js";import"./useTextField-BHNbyuqs.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-Bw92xKCv.js";import"./DragAndDrop-BiiqF27R.js";import"./inertValue-dHGkPW8V.js";import"./useListState-B55g804t.js";import"./TagGroup-Cz3D-Onk.js";import"./useHighlightSelectionDescription-Dd0ZnpbZ.js";import"./useUpdateEffect-3Gy1iKnt.js";import"./useHasTabbableChild-DOtiguyb.js";import"./chevron-down-B50OYwZo.js";import"./Virtualizer-D86RgJGf.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
