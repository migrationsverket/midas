import{j as e}from"./iframe-9chkR4gz.js";import{c}from"./Form-Rrz88-kW.js";import{G as d}from"./Grid-zFe36Q5w.js";import{G as i}from"./GridItem-DmVO8fSS.js";import{a as x,R as u}from"./Radio-t33ibw4y.js";import{C as I}from"./CheckboxGroup-D4LaR2C-.js";import{C as G}from"./Checkbox-D8FDNAzS.js";import{T as t}from"./TextField-CEtJ0cFa.js";import{S as l}from"./Select-2KPjYJuM.js";import{L as p}from"./ListBoxItem-785zMIZW.js";import{B as a}from"./Button-Ci--O4pG.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-WYiiq_Gm.js";import"./utils-BlWKHGoz.js";import"./clsx-B-dksMZM.js";import"./index-CHvMuKX3.js";import"./index-N421M2ll.js";import"./clsx-Ciqy0D92.js";import"./Group-DQRpK11V.js";import"./FieldError-vZw2hMgY.js";import"./Text-MA5MIJQJ.js";import"./Text-Dp0Bwi6j.js";import"./Button-D4nJHmzm.js";import"./Hidden-Bdzqqxyq.js";import"./useLabel-CMZqh7QI.js";import"./useLabels-Caurk_qr.js";import"./useButton-Bq4HZXfA.js";import"./SelectionIndicator-B__YK30t.js";import"./useField-Bqq6-wKZ.js";import"./VisuallyHidden-V1FUVsZ9.js";import"./useControlledState-CLfBe7O7.js";import"./Label-BdnI61R5.js";import"./Dialog-DM0Vs9mu.js";import"./RSPContexts-CUGomGxG.js";import"./OverlayArrow-BMadfotl.js";import"./useResizeObserver-38oCr3mD.js";import"./Collection-BHv4QbOB.js";import"./index-Ca0qo15i.js";import"./Separator-BMNOTgxN.js";import"./SelectionManager-Ccl2m8NF.js";import"./useEvent-Cgh5SQda.js";import"./scrollIntoView-sky0cFHJ.js";import"./useDescription-DPjbxax8.js";import"./ListKeyboardDelegate-D9iFGFSm.js";import"./PressResponder-D6Z4CGpH.js";import"./useLocalizedStringFormatter-D-8D6EPs.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-qvrRIcrq.js";import"./getScrollParent-BfXegyuf.js";import"./ModalOverlay-nlP5nyqA.js";import"./x-2BQcGtH9.js";import"./createLucideIcon-BKKhyqi3.js";import"./useLocalizedStringFormatter-BvTLyPxY.js";import"./Heading-yGrF_JVo.js";import"./info-ib1-63D-.js";import"./Popover-D3_cqCJc.js";import"./check-BER4BaL4.js";import"./useToggleState-DzRKME7V.js";import"./TextFieldBase-DIf-Q1_k.js";import"./Input-CBS4hqhQ.js";import"./useTextField-CsFl93VO.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-CUDsHhaS.js";import"./DragAndDrop-CjLzTLlR.js";import"./inertValue-Bevr-SYm.js";import"./useListState-RVhEfCUd.js";import"./TagGroup-CdEYpkzQ.js";import"./useHighlightSelectionDescription-d5X_FB75.js";import"./useUpdateEffect-Dgn7JV2t.js";import"./useHasTabbableChild-D-YEkew-.js";import"./chevron-down-BTdp5lh3.js";import"./Virtualizer-BgwZgP1l.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
