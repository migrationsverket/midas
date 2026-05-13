import{j as e}from"./iframe-DK3mrAyo.js";import{c}from"./Form-ZU5Jc3do.js";import{G as d}from"./Grid-D9aj8KEA.js";import{G as i}from"./GridItem-C3CgCF79.js";import{a as x,R as u}from"./Radio-CfxUj46x.js";import{C as I}from"./CheckboxGroup-DnVQWJPL.js";import{C as G}from"./Checkbox-Cy_8v4EU.js";import{T as t}from"./TextField-C_yyewi_.js";import{S as l}from"./Select-BqywXUhz.js";import{L as p}from"./ListBoxItem-eNwBHpwS.js";import{B as a}from"./Button-BKk1KYPK.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-GGCG3XqX.js";import"./utils-KWB3V7Ew.js";import"./clsx-B-dksMZM.js";import"./index-BmaOBGQH.js";import"./index-Cy3OoqhK.js";import"./clsx-Ciqy0D92.js";import"./Group-FnEYpQ-A.js";import"./FieldError-7i4Fax51.js";import"./Text-ChQBgCn7.js";import"./Text-BG4EGVIm.js";import"./Button-Yd8CTw2L.js";import"./Hidden-B9O9f11_.js";import"./useLabel-CoP8Rogk.js";import"./useLabels-Cjb6VPbR.js";import"./useButton-Ee-WcKk0.js";import"./SelectionIndicator-tPL3-k8A.js";import"./useField-BURaNJxe.js";import"./VisuallyHidden-CuCKnYKC.js";import"./useControlledState-c72KLHwF.js";import"./Label-D_tmWt9z.js";import"./Dialog-D9WESYo-.js";import"./RSPContexts-CbpbC2QZ.js";import"./OverlayArrow-rKrAE_rE.js";import"./useResizeObserver-NQKT9YoR.js";import"./Collection-DIXCXOkQ.js";import"./index-CepTmLHf.js";import"./Separator-BnWPNY9L.js";import"./SelectionManager-Dknd4-dt.js";import"./useEvent-q7OaXBNw.js";import"./scrollIntoView-DzztdlRp.js";import"./useDescription-e3GpwAAN.js";import"./ListKeyboardDelegate-jeW_soEh.js";import"./PressResponder-8JpLfvHI.js";import"./useLocalizedStringFormatter-CXfqNWhw.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DuQmEC3G.js";import"./getScrollParent-CsmfW8t8.js";import"./ModalOverlay-CfdiJ_2P.js";import"./x-Cj5OGhdg.js";import"./createLucideIcon-ZHubZ-OE.js";import"./useLocalizedStringFormatter-DGfSF0iv.js";import"./Heading-D2LEgSAb.js";import"./info-KL40TE4F.js";import"./Popover-B-7tZGlC.js";import"./check-BiZdBlJV.js";import"./useToggleState-Bym-Bv-P.js";import"./TextFieldBase-Bo3zGWVW.js";import"./Input-BNeMn4RE.js";import"./useTextField-CfphWo0U.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-DTdU0iVT.js";import"./DragAndDrop-DYKm57om.js";import"./inertValue-BtJ26tG3.js";import"./useListState-k25ADQOj.js";import"./TagGroup-BwL2LFRT.js";import"./useHighlightSelectionDescription-Bzjkmi7T.js";import"./useUpdateEffect-BRpUNopn.js";import"./useHasTabbableChild-CfHaVROs.js";import"./chevron-down-iH5bxhAg.js";import"./Virtualizer-BJL6qBhR.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
