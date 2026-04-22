import{j as e}from"./iframe-CWDqI9As.js";import{c}from"./Form-Bi-96Kx0.js";import{G as d}from"./Grid-DAgntz_H.js";import{G as i}from"./GridItem-mRdxsWJB.js";import{a as x,R as u}from"./Radio-COrEO_US.js";import{C as I}from"./CheckboxGroup-DDwN-mxq.js";import{C as G}from"./Checkbox-DOk-NWfX.js";import{T as t}from"./TextField-CAiBKyNn.js";import{S as l}from"./Select-dCQHG4qi.js";import{L as p}from"./ListBoxItem-gs4N0KpE.js";import{B as a}from"./Button-CT52BdlE.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-CGI_ER4d.js";import"./utils-dBjUBpAV.js";import"./clsx-B-dksMZM.js";import"./index-BPbsZXYC.js";import"./index-B9h6eKZl.js";import"./clsx-Ciqy0D92.js";import"./Group-EJLZZM0Q.js";import"./FieldError-BFTOWK8w.js";import"./Text-CNhsvp3k.js";import"./Text-Bg0gZzcQ.js";import"./Button-ChgRUqyy.js";import"./Hidden-Cgjt9oWa.js";import"./useLabel-BVrFk9UL.js";import"./useLabels-BvpY06Hn.js";import"./useButton-C4i5Q2ts.js";import"./SelectionIndicator-SU9AKZhk.js";import"./useField-C8fPh8Wl.js";import"./VisuallyHidden-CSPSoyjM.js";import"./useControlledState-7TZpR_sr.js";import"./Label-BZyuXFgi.js";import"./Dialog-DG6MYKjB.js";import"./RSPContexts-BANsKMWb.js";import"./OverlayArrow-DsWYENJs.js";import"./useResizeObserver-U8EiD1vM.js";import"./Collection-BCFGKp7k.js";import"./index-CQlCIbRD.js";import"./Separator-SJgp7vcw.js";import"./SelectionManager-CRbMuRcS.js";import"./useEvent-Cr5dRUc0.js";import"./scrollIntoView-CWyOkl1L.js";import"./useDescription-DPaZj1pb.js";import"./ListKeyboardDelegate-DfYbDCAE.js";import"./PressResponder-CcyPq1JI.js";import"./useLocalizedStringFormatter-BpizLsAw.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-By6ANJoT.js";import"./getScrollParent-_UwOfSKS.js";import"./ModalOverlay-gRwerX64.js";import"./x-CzmzQROS.js";import"./createLucideIcon-CQ9K894w.js";import"./useLocalizedStringFormatter-CoCxcMtj.js";import"./Heading-mvOStMwp.js";import"./info-twn1bu6v.js";import"./Popover-BFfrnmTU.js";import"./check-D8HLpIE6.js";import"./useToggleState-D7dkoKRz.js";import"./TextFieldBase-kWnqtP6B.js";import"./Input-Cd4gARcs.js";import"./useTextField-BMHVb6gN.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-BijvzkLM.js";import"./DragAndDrop-BYGbpFn5.js";import"./inertValue-CG3IsiG3.js";import"./useListState-D9WQCyPM.js";import"./TagGroup-mY8ptgD1.js";import"./useHighlightSelectionDescription-D62j4h7n.js";import"./useUpdateEffect-BxR7Ys3d.js";import"./useHasTabbableChild-BDR4dNN2.js";import"./chevron-down-BR9c5yuR.js";import"./Virtualizer-cUas3Zng.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
