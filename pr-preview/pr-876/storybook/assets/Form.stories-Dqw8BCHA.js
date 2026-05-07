import{j as e}from"./iframe-DsyUTAcE.js";import{c}from"./Form-CGaVeMLz.js";import{G as d}from"./Grid-DomIyvec.js";import{G as i}from"./GridItem-iCdZvldt.js";import{a as x,R as u}from"./Radio-DLO48pnF.js";import{C as I}from"./CheckboxGroup-B6Fdrh2Y.js";import{C as G}from"./Checkbox-_ebYPoxD.js";import{T as t}from"./TextField-n_sH--NI.js";import{S as l}from"./Select-CayN1frS.js";import{L as p}from"./ListBoxItem-BMoUqrNC.js";import{B as a}from"./Button-D3VEHZPU.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-Cx6ToNCy.js";import"./utils-BnWDXxML.js";import"./clsx-B-dksMZM.js";import"./index-Cm0emSOI.js";import"./index-DUe59CJc.js";import"./clsx-Ciqy0D92.js";import"./Group-fE0kJLiO.js";import"./FieldError-CUL53TAh.js";import"./Text-BcSWoPTn.js";import"./Text-BbelKnYK.js";import"./Button-CyvfdMVt.js";import"./Hidden-C6TlAeVz.js";import"./useLabel-BZ281jnk.js";import"./useLabels-B-uO_ouR.js";import"./useButton-zhU8f6Q9.js";import"./SelectionIndicator-jhAgBAsJ.js";import"./useField-CZQg1P7z.js";import"./VisuallyHidden-hue3FDJw.js";import"./useControlledState-CUD0SDj1.js";import"./Label-Crq51tct.js";import"./Dialog-DohYhUFQ.js";import"./RSPContexts-Bq3W9l8U.js";import"./OverlayArrow-Bt8y4fvo.js";import"./useResizeObserver-eQ6f-ciW.js";import"./Collection-BkFaDfpb.js";import"./index-DKebHK_B.js";import"./Separator-DiYSAA9a.js";import"./SelectionManager-DWstKPeT.js";import"./useEvent-CSHJ_TNr.js";import"./scrollIntoView-C7SZHVqe.js";import"./useDescription-umLegZgN.js";import"./ListKeyboardDelegate-Cof7SJue.js";import"./PressResponder-k6I_4WI-.js";import"./useLocalizedStringFormatter-Bt27mnVB.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CB6ugAJk.js";import"./getScrollParent-dZX6mtkV.js";import"./ModalOverlay-DY-j-A4y.js";import"./x-zGwK5Qc9.js";import"./createLucideIcon-BXEX14cZ.js";import"./useLocalizedStringFormatter-d708RcER.js";import"./Heading-D4DQoq2I.js";import"./info-DGX3oTFd.js";import"./Popover-H2lXawV4.js";import"./check-Do4XVmm2.js";import"./useToggleState-Cluwmvkg.js";import"./TextFieldBase-BuuQ3mmm.js";import"./Input-Cmaom0ys.js";import"./useTextField-CXj02fYa.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-CQR7bO0C.js";import"./DragAndDrop-CcN1KA_p.js";import"./inertValue-CWbSluor.js";import"./useListState-BsjpWrwT.js";import"./TagGroup-Bte4W_TD.js";import"./useHighlightSelectionDescription-DyKgUkQO.js";import"./useUpdateEffect-CUPD6Q02.js";import"./useHasTabbableChild-Baa8wt9N.js";import"./chevron-down-FaVeB-Gs.js";import"./Virtualizer-DG813MCm.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
