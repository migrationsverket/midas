import{j as e}from"./iframe-D0FqK1lb.js";import{c}from"./Form-B4kYCfIB.js";import{G as d}from"./Grid-C7jmn6za.js";import{G as i}from"./GridItem-DF6v-gyY.js";import{a as x,R as u}from"./Radio-DFy89rWj.js";import{C as I}from"./CheckboxGroup-Bto-47Hm.js";import{C as G}from"./Checkbox-Dob_Iq_G.js";import{T as t}from"./TextField-ouQD8bQh.js";import{S as l}from"./Select-D-LrJNtV.js";import{L as p}from"./ListBoxItem-CChwOm0m.js";import{B as a}from"./Button-BmBlwCLs.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-BD1a5Y2G.js";import"./utils-BMbNOyUc.js";import"./clsx-B-dksMZM.js";import"./index-5HzkHfPe.js";import"./index-SIDrXvAb.js";import"./clsx-Ciqy0D92.js";import"./Group-C-ROvPDj.js";import"./FieldError-D9qv9kV0.js";import"./Text-Du7gyEcw.js";import"./Text-DNU35Fvp.js";import"./Button-ASP2neQz.js";import"./Hidden-Dhm_4TsG.js";import"./useLabel-ky8NeYeA.js";import"./useLabels-Dak2com7.js";import"./useButton-pK_0UtxK.js";import"./SelectionIndicator-Brnu1DGI.js";import"./useField-j5hIvejQ.js";import"./VisuallyHidden-CFNdR6Qu.js";import"./useControlledState-C8lWssw-.js";import"./Label-pa7GTQEx.js";import"./Dialog-DYtX3rt-.js";import"./RSPContexts-0TxVVo6E.js";import"./OverlayArrow-BRAHmtAX.js";import"./useResizeObserver-oMKCGDU6.js";import"./Collection-BqqxDhK2.js";import"./index-DHQ1v_AI.js";import"./Separator-BJndn-Pq.js";import"./SelectionManager-CgUlY-2r.js";import"./useEvent-B8pAJ79A.js";import"./scrollIntoView-DLJFvk8W.js";import"./useDescription-Df9gIiPP.js";import"./ListKeyboardDelegate-C1t568NK.js";import"./PressResponder-DGMJW-pM.js";import"./useLocalizedStringFormatter-BHS8kRNf.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-B6V37QhV.js";import"./getScrollParent-CbuB2ebi.js";import"./ModalOverlay-BJoZltO4.js";import"./x-CjuTORk7.js";import"./createLucideIcon-B3FFrp2k.js";import"./useLocalizedStringFormatter-CgfN0QE1.js";import"./Heading-DpJ7i1P8.js";import"./info-DsHfgpgH.js";import"./Popover-CHjIIBtG.js";import"./check-DFs_JDr_.js";import"./useToggleState-D2b6O0wH.js";import"./TextFieldBase-B14ZlvAr.js";import"./Input-mDw74LWW.js";import"./useTextField-UlbAGD_U.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-Im7ano2y.js";import"./DragAndDrop-k0HA5Ozm.js";import"./inertValue-BdTHG481.js";import"./useListState-DquQAIcQ.js";import"./TagGroup-wM2L3g58.js";import"./useHighlightSelectionDescription-2q_Z90bm.js";import"./useUpdateEffect-C47vblp-.js";import"./useHasTabbableChild-BhNmSRYm.js";import"./chevron-down-lNwF_GJ1.js";import"./Virtualizer-Ce8LYKFA.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
