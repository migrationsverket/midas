import{j as e}from"./iframe-DGitGBwd.js";import{c}from"./Form-D5bu5HNp.js";import{G as d}from"./Grid-BVbQtbyB.js";import{G as i}from"./GridItem-CqJyeAba.js";import{a as x,R as u}from"./Radio-1YLEwQBZ.js";import{C as I}from"./CheckboxGroup-CPaQpZPk.js";import{C as G}from"./Checkbox-DU9IcgWj.js";import{T as t}from"./TextField-N_ziMY8e.js";import{S as l}from"./Select-C4yOAid2.js";import{L as p}from"./ListBoxItem-Z0Poe4Uj.js";import{B as a}from"./Button-CJ16F3mz.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-BSQFeV26.js";import"./utils-DlxgMN-X.js";import"./clsx-B-dksMZM.js";import"./index-CgyYAO-T.js";import"./index-C2aEhFku.js";import"./clsx-Ciqy0D92.js";import"./Group-D-AHlaPK.js";import"./FieldError-BLFTeUPi.js";import"./Text-BBS_R9Lb.js";import"./Text-BHRP82y-.js";import"./Button-CFc7ZkBU.js";import"./Hidden-BTbvwN5u.js";import"./useLabel-DxdQgbMB.js";import"./useLabels-Obe7Lwct.js";import"./useButton-CJsEP6bk.js";import"./SelectionIndicator-Dqps-ADK.js";import"./useField-dgIiq1Nz.js";import"./VisuallyHidden-BUTi2bAi.js";import"./useControlledState-Dj3Q8cMg.js";import"./Label-BpQy6_dP.js";import"./Dialog-T51nnNds.js";import"./RSPContexts-BNal8wWj.js";import"./OverlayArrow-CDYvBswo.js";import"./useResizeObserver-CiWUltQW.js";import"./Collection-DLiHOCN2.js";import"./index-CU63vF8i.js";import"./Separator-KXVn-reU.js";import"./SelectionManager-B9az4Zc6.js";import"./useEvent-DNR96Pag.js";import"./scrollIntoView-CQlM3xNO.js";import"./useDescription-DIrfQQU3.js";import"./ListKeyboardDelegate-9t6rl9Vm.js";import"./PressResponder-DOYOU7BC.js";import"./useLocalizedStringFormatter-IrjHOpw7.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CKmOhXBP.js";import"./getScrollParent-BD_bpobV.js";import"./ModalOverlay-BVWZrGiy.js";import"./x-B5AWcWMp.js";import"./createLucideIcon-CcqKhbRQ.js";import"./useLocalizedStringFormatter-CveS3y_K.js";import"./Heading-B0sINXDi.js";import"./info-BKUPn93-.js";import"./Popover-BeXM43G5.js";import"./check-BXM6CgTt.js";import"./useToggleState-q3BSSBJW.js";import"./TextFieldBase-n6GhlOOc.js";import"./Input-CH8YKgUw.js";import"./useTextField-IBB62wLm.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-BkjZy-04.js";import"./DragAndDrop-3B8OAHmx.js";import"./inertValue-Dytzfxfp.js";import"./useListState-BFxuNufr.js";import"./TagGroup-CM8463W1.js";import"./useHighlightSelectionDescription-DWw_TS8A.js";import"./useUpdateEffect-CqYhF1SR.js";import"./useHasTabbableChild-BNUZpARZ.js";import"./chevron-down-DpUMI4c1.js";import"./Virtualizer-Cw6qhNIL.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
