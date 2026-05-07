import{j as e}from"./iframe-drf9EhAh.js";import{c}from"./Form-D1u5ze6A.js";import{G as d}from"./Grid-N2JiFBUd.js";import{G as i}from"./GridItem-Di7-asdd.js";import{a as x,R as u}from"./Radio-D3K6oNjI.js";import{C as I}from"./CheckboxGroup-DXM6Yhg2.js";import{C as G}from"./Checkbox-Do4fEZ-F.js";import{T as t}from"./TextField-DYAhdRUm.js";import{S as l}from"./Select-ClTJ4ZJ2.js";import{L as p}from"./ListBoxItem-CfCEMubm.js";import{B as a}from"./Button-CKcwfDVm.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-CFnRXdWt.js";import"./utils-DcVi9P2n.js";import"./clsx-B-dksMZM.js";import"./index-DYwtvWTx.js";import"./index-C8RswtkR.js";import"./clsx-Ciqy0D92.js";import"./Group-DBxIGOXS.js";import"./FieldError-Csn4LdNH.js";import"./Text-4jcbiO_v.js";import"./Text-BGu5cWKN.js";import"./Button-uX5YcsyE.js";import"./Hidden-DCsyu9It.js";import"./useLabel-Nvs3avqK.js";import"./useLabels-CghwtOHR.js";import"./useButton-BPOukTAc.js";import"./SelectionIndicator-CGpdz0B5.js";import"./useField-BeF2QHdx.js";import"./VisuallyHidden-S3B-3ASH.js";import"./useControlledState-PtQwVjVx.js";import"./Label-B4tCS9Bi.js";import"./Dialog-BecWSRZT.js";import"./RSPContexts-CdnNEEoB.js";import"./OverlayArrow-C5cLVELl.js";import"./useResizeObserver-D54OGLsw.js";import"./Collection-Bsu-J4zk.js";import"./index-BZAuS4Xz.js";import"./Separator-C-y7AnE8.js";import"./SelectionManager-Cw-cvhTc.js";import"./useEvent-DDZO5sYT.js";import"./scrollIntoView-DPcz4qGT.js";import"./useDescription-DoT_EJq_.js";import"./ListKeyboardDelegate-Cu9VUk_s.js";import"./PressResponder-JoTRNLaF.js";import"./useLocalizedStringFormatter-B8W8LNuc.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-NoejLbZr.js";import"./getScrollParent-C25lSkvK.js";import"./ModalOverlay-Bw3fg6dQ.js";import"./x-BhSuHU0t.js";import"./createLucideIcon-ZHG_RQ_P.js";import"./useLocalizedStringFormatter-IFaLmUck.js";import"./Heading-BUSolncq.js";import"./info-CQOOIdcR.js";import"./Popover-DmAk6xa2.js";import"./check-BQBPIh6T.js";import"./useToggleState-D-98hIvF.js";import"./TextFieldBase-DKVGivGK.js";import"./Input-CkrGyO13.js";import"./useTextField-iOBnPuVv.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-De3mPOAd.js";import"./DragAndDrop-Imj0Fqjs.js";import"./inertValue-3BsA1ycs.js";import"./useListState-BWxrsoD6.js";import"./TagGroup-DoSFHbvq.js";import"./useHighlightSelectionDescription-CfI9ziJh.js";import"./useUpdateEffect-DxJx9bl3.js";import"./useHasTabbableChild-Xc-9Se0U.js";import"./chevron-down-Cut3h3hh.js";import"./Virtualizer-DAwvQ4L8.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
