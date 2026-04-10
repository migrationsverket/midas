import{j as e}from"./iframe-eIKe2X_m.js";import{c}from"./Form-BbvKGnjc.js";import{G as d}from"./Grid-BLbiXIug.js";import{G as i}from"./GridItem-D8tUJVRh.js";import{a as x,R as u}from"./Radio-DNUkqFTn.js";import{C as I}from"./CheckboxGroup-Ah25lgTk.js";import{C as G}from"./Checkbox-BsG-xzf4.js";import{T as t}from"./TextField-BwAROaWM.js";import{S as l}from"./Select-BlYJF0KF.js";import{L as p}from"./ListBoxItem-Bw1BEziO.js";import{B as a}from"./Button-B-V9quu1.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-ChUuwE-2.js";import"./utils-BoPGT07A.js";import"./clsx-B-dksMZM.js";import"./index-DYK-fZpj.js";import"./index-DgJxkeaR.js";import"./clsx-Ciqy0D92.js";import"./Group-CtPsluas.js";import"./FieldError-xOrsoR1D.js";import"./Text-CiEoCLNV.js";import"./Text-CuxH_tBg.js";import"./Button-7V_IyEW5.js";import"./Hidden-CXbku1y6.js";import"./useLabel-BDJHN6yJ.js";import"./useLabels-CzQg4_Ye.js";import"./useButton-JGMEg_eW.js";import"./SelectionIndicator-CBGgJV-O.js";import"./useField-DqbOOgGS.js";import"./VisuallyHidden-CSQH58ck.js";import"./useControlledState-CGyGwo-A.js";import"./Label-DCe_tEzf.js";import"./Dialog-BzlUiw8w.js";import"./RSPContexts-CbT1tTzu.js";import"./OverlayArrow-DbC8BzIE.js";import"./useResizeObserver-Bfe7G0ym.js";import"./Collection-BkqcoK6r.js";import"./index-CKqS6MCL.js";import"./Separator-4wodsL9H.js";import"./SelectionManager-BVEVky2i.js";import"./useEvent-CHBVldLN.js";import"./scrollIntoView-C35qIzu7.js";import"./useDescription-C7d6IwkV.js";import"./ListKeyboardDelegate-jHRTOiqQ.js";import"./PressResponder-DKWD07tS.js";import"./useLocalizedStringFormatter-LPlwK2CH.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DAvKYVcx.js";import"./getScrollParent-DJBZNJub.js";import"./Modal-DJ0Yq2JH.js";import"./x-Dk3bNdoj.js";import"./createLucideIcon-CLkqqabX.js";import"./useLocalizedStringFormatter-C4qP-j6o.js";import"./Heading-D217TPLQ.js";import"./info-A7J0CbzS.js";import"./Popover-CNP8I657.js";import"./check-BacrYI6N.js";import"./useToggleState-BXMN098i.js";import"./TextFieldBase-DyHLHni8.js";import"./Input-Dfdq0cPF.js";import"./useTextField-CudkVjWt.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-BjKj7xDi.js";import"./DragAndDrop-C2OnYosn.js";import"./inertValue-D-K8UVly.js";import"./useListState-FiCGPAye.js";import"./TagGroup-C38ikVG1.js";import"./useHighlightSelectionDescription-7kye4o1s.js";import"./useUpdateEffect-HkqiKOYN.js";import"./useHasTabbableChild-55C6CMFP.js";import"./chevron-down-DDC2WYFR.js";import"./Virtualizer-Dn2Mh4Kh.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
