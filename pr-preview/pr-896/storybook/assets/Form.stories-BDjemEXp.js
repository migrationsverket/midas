import{j as n}from"./iframe-Dk0359lg.js";import{$ as j}from"./Form-BEmB480J.js";import{G}from"./Grid-a-952Gq1.js";import{G as e}from"./GridItem-Cz-WuK7J.js";import{T as r}from"./TextField-CwjxftZj.js";import{S as I}from"./Select-C8xs3kdh.js";import{B as a}from"./Button-CCvtjb0r.js";import{R as g,a as b}from"./Radio-BiRK6Zkj.js";import{C as h}from"./CheckboxGroup-C2dKmqvA.js";import{C as k}from"./Checkbox-B8lLP0zH.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-CvpWk59f.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-B19TdEnU.js";import"./useFocusRing-CyizXmho.js";import"./index-BwKitm0F.js";import"./index-DpiuJWyq.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-Ckx-MTLm.js";import"./TextField-Cdru682l.js";import"./FieldError-DM9TYOog.js";import"./Text-CLuQ9Iy6.js";import"./Text-DH5B7cvb.js";import"./RSPContexts-s5rsoeMx.js";import"./Group-D7j9eo2e.js";import"./Input-T4HNJRAL.js";import"./Hidden-BfIVe4d9.js";import"./Button-BAsJFgH6.js";import"./useLabels-Bs0lg8Cj.js";import"./useButton-DIgp0Cvw.js";import"./useTextField-DAu5-0hO.js";import"./useControlledState-Ds_AEaOX.js";import"./useField-ClItxAP7.js";import"./TextField.module-Ddb2XBAw.js";import"./Label-DfIxU97Y.js";import"./Dialog-CVtCs0ij.js";import"./OverlayArrow-D-A6tyMt.js";import"./useResizeObserver-DX2BV3sc.js";import"./Collection-B8fF9V3F.js";import"./index-B1KqaNSf.js";import"./Separator-BAA5KyhX.js";import"./SelectionManager-COZFonj1.js";import"./useEvent-D_zOj2gL.js";import"./scrollIntoView-BDt7ZXnn.js";import"./SelectionIndicator-D-r3zU-C.js";import"./useDescription-DJdnmaox.js";import"./ListKeyboardDelegate-ClnZvAK4.js";import"./PressResponder-1CoVsC8F.js";import"./useLocalizedStringFormatter-BxOLT3XX.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-DMLrkAtT.js";import"./VisuallyHidden-B00FeztC.js";import"./useLocalizedStringFormatter-j2jCYdXM.js";import"./x-Dmpz-8wG.js";import"./createLucideIcon-0canVkms.js";import"./Heading-C3xV3pbr.js";import"./info-qeJqfPTe.js";import"./Popover-DY5l_3N2.js";import"./Tag-Bmx1k92f.js";import"./ListBox-BBMr64ou.js";import"./DragAndDrop-CJEciKH8.js";import"./inertValue-DVVClvYr.js";import"./useListState-BBKuxa9q.js";import"./useHighlightSelectionDescription-CR5UhxzO.js";import"./useUpdateEffect-BFr5CpOg.js";import"./useHasTabbableChild-DS9yR_kq.js";import"./check-DanNUqJ4.js";import"./ListBoxSection-BWGRV7Sy.js";import"./Virtualizer-BnOcsczW.js";import"./chevron-down-Cjz7yeAL.js";import"./Button.module-CcWMkJAG.js";import"./useToggleState-PoMzbVza.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
