import{j as n}from"./iframe-D-vM0KJV.js";import{$ as j}from"./Form-BZgxyBdW.js";import{G}from"./Grid-C-7YHY3o.js";import{G as e}from"./GridItem-Y3J1aWUx.js";import{T as r}from"./TextField-B81R-FQA.js";import{S as I}from"./Select-o6f_pkCO.js";import{B as a}from"./Button-CSzky6JE.js";import{R as g,a as b}from"./Radio-BBCPkg6Q.js";import{C as h}from"./CheckboxGroup-BGO2QUSg.js";import{C as k}from"./Checkbox-BbHyiuRB.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-jHN4O93F.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-Co0rOCT-.js";import"./useFocusRing-B1D0OxaB.js";import"./index-Dpp169zk.js";import"./index-DAhhoemU.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-Cq7wyENi.js";import"./TextField-CuBJOi0H.js";import"./FieldError-CvKP9XrO.js";import"./Text-Dvhu__Nd.js";import"./Text-D3AyHaEB.js";import"./RSPContexts-C18CKUa5.js";import"./Group-C0XqGGqh.js";import"./Input-Bxm1h10m.js";import"./Hidden-DeY6xaVX.js";import"./Button-DgIjK-s6.js";import"./useLabels-B5h-M-s5.js";import"./useButton-CU8F_nzl.js";import"./useTextField-CJ2wfPvu.js";import"./useControlledState-DSX_OzeD.js";import"./useField-ChN-w1hz.js";import"./TextField.module-Ddb2XBAw.js";import"./Label-C1LiwuyC.js";import"./Dialog-zILUR1_e.js";import"./OverlayArrow-DSxXbs83.js";import"./useResizeObserver-BVznDsZ-.js";import"./Collection-D8PqjRbb.js";import"./index-jiIFkMRL.js";import"./Separator-g03LdUhH.js";import"./SelectionManager-Bkl5SaKe.js";import"./useEvent-D5XeGmay.js";import"./scrollIntoView-Dl8yldBY.js";import"./SelectionIndicator-Btb5hppW.js";import"./useDescription-BKtVbsWV.js";import"./ListKeyboardDelegate-Bew9Z8E1.js";import"./PressResponder-BGITSPGs.js";import"./useLocalizedStringFormatter-B7SESn4w.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-BZCBf9ov.js";import"./VisuallyHidden-C6zeeOLo.js";import"./useLocalizedStringFormatter-BFoj3CLW.js";import"./x-D_l5qUJY.js";import"./createLucideIcon-DQmU_5xe.js";import"./Heading-Fzo9UxHB.js";import"./info-Da1JmBtJ.js";import"./Popover-DNdKN9wh.js";import"./Tag-C7cHVPsp.js";import"./ListBox-DHaAkATx.js";import"./DragAndDrop-B77C-59X.js";import"./inertValue-COupEjI3.js";import"./useListState-Kj31SYzV.js";import"./useHighlightSelectionDescription-D8Fd0y0G.js";import"./useUpdateEffect-Bv-Sm376.js";import"./useHasTabbableChild-Bj5-kSYo.js";import"./check-C31htUn6.js";import"./ListBoxSection-DgywuAPe.js";import"./Virtualizer-ByYQ3kFK.js";import"./chevron-down-C0prTLl-.js";import"./Button.module-CcWMkJAG.js";import"./useToggleState-CaJtuSwr.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
