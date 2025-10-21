import{j as n}from"./iframe-D0MnHx7_.js";import{$ as j}from"./Form-D9N_YKUA.js";import{G}from"./Grid-48S19sHQ.js";import{G as e}from"./GridItem-dMuZkyuQ.js";import{T as r}from"./TextField-D7vEOURq.js";import{S as I}from"./Select-NwueeUCz.js";import{B as a}from"./Button-_otvzGNR.js";import{R as g,a as b}from"./Radio-CLUSb26M.js";import{C as h}from"./CheckboxGroup-BeU9bHG9.js";import{C as k}from"./Checkbox-BQt02Atj.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-pp0QcdTs.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-98nNP9ba.js";import"./useFocusRing-Da1HHjoJ.js";import"./index-CQZ3zNG1.js";import"./index-1Vm2fim1.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-BeIw-dkp.js";import"./TextField-uVGwxrb2.js";import"./FieldError-CITa3MIL.js";import"./Text-D0mypJCj.js";import"./Text-N43dfiPC.js";import"./RSPContexts-CZnIKwCk.js";import"./Group-Cb4frjau.js";import"./Input-C1Eegxss.js";import"./Hidden-Da0TrTOe.js";import"./Button-DmxnH2Va.js";import"./useLabels-CxIcwF3m.js";import"./useButton-ClVfglou.js";import"./useTextField-DPaxfBNI.js";import"./useControlledState-D0vKbhZz.js";import"./useField-DpA6EWAW.js";import"./TextField.module-Ddb2XBAw.js";import"./Label-BDe8CB4Y.js";import"./Dialog-CTUgMpIY.js";import"./OverlayArrow-DTjH6KsY.js";import"./useResizeObserver-DpqzY0Ww.js";import"./Collection-i6C7_leR.js";import"./index-jzHelxYO.js";import"./Separator-Cn_WlJvJ.js";import"./SelectionManager-BA1fc3H9.js";import"./useEvent-wUPEA5Yp.js";import"./scrollIntoView-_ew6GoOj.js";import"./SelectionIndicator-_6KlKWtr.js";import"./useDescription-BMrNXiBq.js";import"./ListKeyboardDelegate-CfPczcXS.js";import"./PressResponder-Dw7ZbASZ.js";import"./useLocalizedStringFormatter-Bm0PpbKz.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-BI86YgYn.js";import"./VisuallyHidden-BsmMcnR2.js";import"./useLocalizedStringFormatter-ZxxDhFCb.js";import"./x-DQqWi-x9.js";import"./createLucideIcon-DpmW14MN.js";import"./Heading-D7l0oPT6.js";import"./info-6eLcngpm.js";import"./Popover-i5ySgFkx.js";import"./Tag-DSOqcQbr.js";import"./ListBox-BMlCuX78.js";import"./DragAndDrop-DsEZuwID.js";import"./inertValue-JdXB6oFO.js";import"./useListState-CRO9YIgf.js";import"./useHighlightSelectionDescription-BhzSBAIc.js";import"./useUpdateEffect-CXN2f07A.js";import"./useHasTabbableChild-CmpkMFoD.js";import"./check-BqrbZMZL.js";import"./ListBoxSection--8WCP7br.js";import"./Virtualizer-BaJeZSrG.js";import"./chevron-down-DKKdnA90.js";import"./Button.module-CcWMkJAG.js";import"./useToggleState-DiIJOrhQ.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
