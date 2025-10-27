import{j as n}from"./iframe-r0gqF4SQ.js";import{$ as j}from"./Form-CGau_JXE.js";import{G}from"./Grid-CAIbqQF0.js";import{G as e}from"./GridItem-v1myH4hl.js";import{T as r}from"./TextField-IPZ7p_sj.js";import{S as I}from"./Select-pOUygdsB.js";import{B as a}from"./Button-kvHvsmmz.js";import{R as g,a as b}from"./Radio-fGPK-_T5.js";import{C as h}from"./CheckboxGroup-DlmlNxYm.js";import{C as k}from"./Checkbox-WNGlR8lO.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-DJbaWo92.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-Bh4ZG1w4.js";import"./useFocusRing-Df-VPM0h.js";import"./index-aqPr6EPC.js";import"./index-aX3st589.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-C38u5SWc.js";import"./TextField-BHlV0Wz1.js";import"./FieldError-Bl2737hg.js";import"./Text-BT1FJlh3.js";import"./Text-beiJ6BSj.js";import"./RSPContexts-BSHYsoht.js";import"./Group-DFDIDvRr.js";import"./Input-DUKvhBQK.js";import"./Hidden-CBPjgJ0M.js";import"./Button-DtL-XAG_.js";import"./useLabels-BOJYAo3Q.js";import"./useButton-BnPJwczl.js";import"./useTextField-BC5zATCQ.js";import"./useControlledState-BUTkhZiu.js";import"./useField-b5VWo8KH.js";import"./TextField.module-Ddb2XBAw.js";import"./Label-DaInA8Ex.js";import"./Dialog-ZkQla20d.js";import"./OverlayArrow-ChS1mAP8.js";import"./useResizeObserver-fIXMri4p.js";import"./Collection-CBbFx-zs.js";import"./index-Bs2ph2b0.js";import"./Separator-B87mVdTP.js";import"./SelectionManager-ClCa0FJ6.js";import"./useEvent-B1_YsYdm.js";import"./scrollIntoView-Aq5DZlOW.js";import"./SelectionIndicator-DL9Hupt6.js";import"./useDescription-D9xUebbW.js";import"./ListKeyboardDelegate-DdOJ-nhz.js";import"./PressResponder-DW1JijJG.js";import"./useLocalizedStringFormatter-kkAwSq4q.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-hKzA3YMz.js";import"./VisuallyHidden-Dp2mgzE-.js";import"./useLocalizedStringFormatter-CDwLjk7_.js";import"./x-Du0P0mnx.js";import"./createLucideIcon-BJGlkhiB.js";import"./Heading-C-P3Fo8M.js";import"./info-4e0RNafH.js";import"./Popover-D5UTkWKC.js";import"./Tag-C8EC0VNx.js";import"./ListBox-BMVIlrwH.js";import"./DragAndDrop-2HdgAs-a.js";import"./inertValue-DbbH7f_F.js";import"./useListState-D7aR1vyH.js";import"./useHighlightSelectionDescription-XkPlR_EU.js";import"./useUpdateEffect-fAzzPodv.js";import"./useHasTabbableChild-CK8MRtuZ.js";import"./check-C1wFm9iS.js";import"./ListBoxSection-CCSLR1is.js";import"./Virtualizer-Nu3kNV-C.js";import"./chevron-down-D1VtjE82.js";import"./Button.module-CcWMkJAG.js";import"./useToggleState-H4Wmu5jz.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
          <Select label='Vilken är din favoritfrukt' placeholder='Välj en frukt' selectionMode='single' options={ITEMS.map(i => ({
          id: i,
          name: i
        }))} />
        </GridItem>

        <GridItem>
          <Button>Skicka</Button>
        </GridItem>
      </Grid>;
  }
}`,...(p=(l=m.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var c,x,u;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
            <Select label='Kön' description='Kan lämnas tomt' placeholder='Välj kön' selectionMode='single' options={ITEMS.map(i => ({
            name: i,
            id: i
          }))} />
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
}`,...(u=(x=s.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};const wn=["SimpleForm","TwoColumnForm"];export{m as SimpleForm,s as TwoColumnForm,wn as __namedExportsOrder,$n as default};
